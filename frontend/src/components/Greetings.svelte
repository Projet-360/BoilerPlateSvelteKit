<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { greetingsStore } from '$stores/Data/GreetingsStore/greetingsStore';
    import { t } from '$UITools/Translations/index';

    let name: string = '';
    let message: string = '';
    let id: string | null = null;

    onMount(() => {
        greetingsStore.getGreetingsAPI($t);
    });

    const cleanup = greetingsStore.setupSocketListeners();

    onDestroy(() => {
        console.log("Cleaning up listeners...");
        cleanup();
    });

    async function handleSubmit() {
        console.log("Form submitted:", { name, message, id });
        if (id) {
            await greetingsStore.updateGreetingAPI(id, name, message, $t);
        } else {
            await greetingsStore.createGreetingAPI(name, message, $t);
        }
        clearForm();
    }

    function clearForm() {
        console.log("Form cleared");
        name = '';
        message = '';
        id = null;
    }

    function editGreeting(greeting: TS.Greeting) {
        console.log("Editing greeting:", greeting);

        name = greeting.name;
        message = greeting.message;
        // Utilisation d'une ternaire pour clarifier la logique de fallback
        id = greeting.id ? greeting.id : (greeting._id ? greeting._id : null);
    }
</script>


<form on:submit|preventDefault={handleSubmit}>
    <label for="name">Nom:</label>
    <input id="name" bind:value={name} />

    <label for="message">Message:</label>
    <input id="message" bind:value={message} />

    <button type="submit">{id ? 'Mettre à jour' : 'Ajouter'}</button>
    {#if id}
        <button type="button" on:click={clearForm}>Annuler</button>
    {/if}
</form>

<ul>
    {#each $greetingsStore as greeting}
        <li>
            {greeting.name}: {greeting.message}
            <button on:click={() => editGreeting(greeting)}>Edit</button>
            <button on:click={() => greetingsStore.deleteGreetingAPI(greeting, $t)}>Delete</button>
        </li>
    {/each}
</ul>
