<script lang="ts">
    import { onMount } from 'svelte';
    import { greetingsStore } from '$stores/greetingsStore';

    let name: string = '';
    let message: string = '';
    let editingId: string = null;

    onMount(() => {
        greetingsStore.loadInitialGreetings();
    });

    function handleDelete(id: string) {
        greetingsStore.deleteGreetingFromStore(id);
    }

    function clearForm() {
        name = '';
        message = '';
        editingId = null;
    }
</script>
<form >
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
            
            <button on:click={() => handleDelete(greeting.id)}>Delete</button>
        </li>
    {/each}
</ul>
