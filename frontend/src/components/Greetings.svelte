<script lang="ts">
	import { onMount } from 'svelte';
	import socket from '$utils/socket.js';
	import { sendGreeting, getAllGreetings, deleteGreeting } from '$api/Greetings';
	import { t } from '$UITools/Translations/index';

	let editingId: string | null = null;
	let name: string = '';
	let message: string = '';
	let greetings: any[] = []; // Remplacez "any" par le type approprié si possible

	onMount(async () => {
		greetings = await getAllGreetings();

		// Écoutez les événements du serveur et mettez à jour les données localement
		socket.on('updateGreetings', async () => {
			console.log('Received updateGreetings event from server');
			greetings = await getAllGreetings();
		});
	});

	export function prepareUpdate(greeting: { name: string; message: string; _id: string }): void {
		name = greeting.name;
		message = greeting.message;
		editingId = greeting._id;
	}

	export async function handleSendGreeting(): Promise<void> {
		console.log('Sending greeting');
		const isSuccessful: boolean = await sendGreeting(name, message, editingId, $t);
		if (isSuccessful) {
			name = '';
			message = '';
			editingId = null;

			// Émettez un événement pour informer le serveur que les salutations doivent être mises à jour
			socket.emit('greetingSent');

			greetings = await getAllGreetings();
		}
	}

	export async function handleDeleteGreeting(id: string): Promise<void> {
		console.log(`Deleting greeting with id ${id}`);
		const isSuccessful: boolean = await deleteGreeting(id);
		if (isSuccessful) {
			// Émettez un événement pour informer le serveur que les salutations doivent être mises à jour
			socket.emit('greetingDeleted');

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
