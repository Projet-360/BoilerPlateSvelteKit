<script lang="ts">
    import { onMount } from 'svelte';
    import {
        handleSaveGreeting,
        handleDeleteGreeting,
        loadGreetings,
        initSocketListeners
    } from '$api/services/greetingsService';
    import { greetingsStore } from '$stores/greetingsStore';
    import { t } from '$UITools/Translations/index';

    let name: string = '';
    let message: string = '';
    let editingId: string | null = null;

    onMount(() => {
        loadGreetings();
        const cleanup = initSocketListeners();
        return cleanup;
    });

    const clearForm = () => {
        name = '';
        message = '';
        editingId = null;
    };

    const save = async () => {
        const response = await handleSaveGreeting(name, message, editingId, $t);
        if (response.success) {
            clearForm();
        } else {

        }
    };

    function updateForm(greeting) {
        name = greeting.name;
        message = greeting.message;
        editingId = greeting._id;
    }
</script>


<form on:submit|preventDefault={save}>
	<label for="nameInput">
		Nom :
		<input id="nameInput" name="name" type="text" autocomplete="name" bind:value={name} />
	</label>

	<label for="messageInput">
		Message :
		<input id="messageInput" name="message" type="text" autocomplete="on" bind:value={message} />
	</label>
	<button type="submit">Envoyer</button>
</form>

{#each $greetingsStore as greeting}
	<li>
		{greeting.name}: {greeting.message}
		<button on:click={() => updateForm(greeting)}>Modifier</button>
		<button
			on:click={() => handleDeleteGreeting(greeting._id)}
			disabled={editingId === greeting._id}
		>
			Supprimer
		</button>
	</li>
{/each}