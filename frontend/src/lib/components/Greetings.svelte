<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { greetingsStore } from '$stores/greetingsStore';

    let name: string = '';
    let message: string = '';
    let editingId: string | null = null;

    onMount(() => {
        console.log("Component mounted, loading initial greetings...");
        greetingsStore.loadInitialGreetings();
    });

    const cleanup = greetingsStore.setupSocketListeners();
    onDestroy(() => {
        console.log("Cleaning up listeners...");
        cleanup();
    });    

    async function handleSubmit() {
        console.log("Form submitted:", { name, message, editingId });
        if (editingId) {
            await greetingsStore.updateGreeting(editingId, name, message);
        } else {
            await greetingsStore.addGreeting(name, message);
        }
        clearForm();
    }

    function clearForm() {
        console.log("Form cleared");
        name = '';
        message = '';
        editingId = null;
    }

    function editGreeting(greeting) {
        console.log("Editing greeting:", greeting);
        name = greeting.name;
        message = greeting.message;
        editingId = greeting.id;
    }
</script>


<form on:submit|preventDefault={handleSubmit}>
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
            <button on:click={() => editGreeting(greeting)}>Edit</button>
            <button on:click={() => greetingsStore.deleteGreeting(greeting.id)}>Delete</button>
        </li>
    {/each}
</ul>
