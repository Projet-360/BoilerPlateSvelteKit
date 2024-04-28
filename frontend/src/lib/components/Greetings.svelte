<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import socket from '$api/utils/socket';
    import { greetingsStore, addGreeting, updateGreetingInStore, deleteGreetingFromStore } from '$stores/greetingsStore';
    import client from '../../Apollo';
    import { GET_GREETINGS, CREATE_GREETING, UPDATE_GREETING, DELETE_GREETING } from '../../Apollo/Greetings';

    let name = '';
    let message = '';
    let editingId = null;

    // Fonction pour charger les salutations initiales via GraphQL
    async function loadGreetings() {
        try {
            const { data } = await client.query({ query: GET_GREETINGS });
            greetingsStore.set(data.getGreetings);
        } catch (error) {
            console.error("Erreur lors de la récupération des salutations:", error);
        }
    }

    // Fonction pour ajouter ou mettre à jour une salutation
    async function addOrUpdateGreeting() {
        const mutation = editingId ? UPDATE_GREETING : CREATE_GREETING;
        try {
            const { data } = await client.mutate({
                mutation,
                variables: { id: editingId, name, message },
                update: (cache, { data }) => {
                    // Mettre à jour le store directement ici
                    if (editingId) {
                        updateGreetingInStore(editingId, data.updateGreeting);
                    } else {
                        addGreeting(data.createGreeting);
                    }
                }
            });
            clearForm();
        } catch (error) {
            console.error("Erreur lors de la mutation:", error);
        }
    }

    // Fonction pour préparer la mise à jour d'une salutation
    function prepareUpdate(greeting) {
        editingId = greeting.id;
        name = greeting.name;
        message = greeting.message;
    }

    // Fonction pour supprimer une salutation
    async function deleteGreeting(id) {
        try {
            await client.mutate({
                mutation: DELETE_GREETING,
                variables: { id },
            });
            deleteGreetingFromStore(id);
        } catch (error) {
            console.error("Erreur lors de la suppression de la salutation:", error);
        }
    }

    // Fonction pour nettoyer le formulaire
    function clearForm() {
        name = '';
        message = '';
        editingId = null;
    }

    // Gestion des événements Socket.io
    onMount(() => {
        loadGreetings();

        socket.on('greetingAdded', (greeting) => {
            addGreeting(greeting);
        });

        socket.on('greetingUpdated', (greeting) => {
            updateGreetingInStore(greeting.id, greeting);
        });

        socket.on('greetingDeleted', (id) => {
            deleteGreetingFromStore(id);
        });

        return () => {
            socket.off('greetingAdded');
            socket.off('greetingUpdated');
            socket.off('greetingDeleted');
        };
    });
</script>

<form on:submit|preventDefault={addOrUpdateGreeting}>
    <label for="name">Nom:</label>
    <input id="name" bind:value={name} />

    <label for="message">Message:</label>
    <input id="message" bind:value={message} />

    <button type="submit">{editingId ? 'Mettre à jour' : 'Ajouter'}</button>
    {#if editingId}
        <button type="button" on:click={clearForm}>Annuler</button>
    {/if}
</form>

<ul>
    {#each $greetingsStore as greeting}
        <li>
            {greeting.name}: {greeting.message}
            <button on:click={() => prepareUpdate(greeting)}>Modifier</button>
            <button on:click={() => deleteGreeting(greeting.id)}>Supprimer</button>
        </li>
    {/each}
</ul>
