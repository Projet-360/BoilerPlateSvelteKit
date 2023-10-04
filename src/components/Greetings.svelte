<script>
	import { onMount } from 'svelte';
	import { sendGreeting, getAllGreetings, deleteGreeting } from '$api/Greetings';

	let editingId = null;
	let name = '';
	let message = '';
	let greetings = [];

	onMount(async () => {
		greetings = await getAllGreetings();
	});

	export function prepareUpdate(greeting) {
		name = greeting.name;
		message = greeting.message;
		editingId = greeting._id;
	}

	export async function handleSendGreeting() {
		const isSuccessful = await sendGreeting(name, message, editingId);
		if (isSuccessful) {
			name = '';
			message = '';
			editingId = null;
			greetings = await getAllGreetings();
		}
	}

	export async function handleDeleteGreeting(id) {
		const isSuccessful = await deleteGreeting(id);
		if (isSuccessful) {
			greetings = await getAllGreetings();
		}
	}
</script>

<form on:submit|preventDefault={handleSendGreeting}>
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

<ul>
	{#each greetings as greeting}
		<li>
			{greeting.name}: {greeting.message}
			<button on:click={() => prepareUpdate(greeting)}>Modifier</button>
			<button on:click={() => handleDeleteGreeting(greeting._id)}>Supprimer</button>
		</li>
	{/each}
</ul>
