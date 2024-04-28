<script>
    import { onMount } from 'svelte';
    import { greetingsStore } from '$stores/greetingsStore';

    let name = '';
    let message = '';
    let editingId = null;

    onMount(() => {
        greetingsStore.loadInitialGreetings();
    });


    function handleAddOrUpdate() {
        const greeting = { id: editingId, name, message };
        if (editingId) {
            greetingsStore.updateGreetingInStore(editingId, greeting);
        } else {
            greetingsStore.addGreeting(greeting);
        }
        clearForm();
    }

    function handleDelete(id) {
        greetingsStore.deleteGreetingFromStore(id);
    }

    function clearForm() {
        name = '';
        message = '';
        editingId = null;
    }
</script>
<form on:submit|preventDefault={handleAddOrUpdate}>
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
            <button on:click={() => { editingId = greeting.id; name = greeting.name; message = greeting.message; }}>Edit</button>
            <button on:click={() => handleDelete(greeting.id)}>Delete</button>
        </li>
    {/each}
</ul>
