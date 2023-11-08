<script lang="ts">
	import { onMount } from 'svelte';
	import socket from '$api/utils/socket';
	import { saveGreeting, getAllGreetings, deleteGreeting } from '$api/greetingsAPI';
	import { t } from '$UITools/Translations/index';

	let editingId: string | null = null;
	let name: string = '';
	let message: string = '';
	let greetings: App.Greeting[] = [];

	onMount(async () => {
		const response = await getAllGreetings();
		if (response.success) {
			greetings = response.data;
		} else {
			// Gérer l'erreur, par exemple avec une notification ou un message d'erreur
		}

		const updateGreetingsHandler = async () => {
			const updateResponse = await getAllGreetings();
			if (updateResponse.success) {
				greetings = updateResponse.data;
			} else {
				// Gérer l'erreur
			}
		};

		socket.on('updateGreetings', updateGreetingsHandler);

		return () => {
			// Ceci est appelé lorsque le composant est détruit
			socket.off('updateGreetings', updateGreetingsHandler);
		};
	});

	export function prepareUpdate(greeting: App.Greeting): void {
		name = greeting.name;
		message = greeting.message;
		editingId = greeting._id;
	}

	export async function handleSaveGreeting(): Promise<void> {
		const saveResponse = await saveGreeting(name, message, editingId, $t);
		if (saveResponse.success) {
			name = '';
			message = '';
			editingId = null;
			socket.emit('greetingSent');
			const refreshResponse = await getAllGreetings();
			if (refreshResponse.success) {
				greetings = refreshResponse.data;
			} else {
				// Gérer l'erreur
			}
		} else {
			// Gérer l'erreur
		}
	}

	export async function handleDeleteGreeting(id: string): Promise<void> {
		const deleteResponse = await deleteGreeting(id);
		if (deleteResponse.success) {
			socket.emit('greetingDeleted');
			const refreshResponse = await getAllGreetings();
			if (refreshResponse.success) {
				greetings = refreshResponse.data;
			} else {
				// Gérer l'erreur
			}
		} else {
			// Gérer l'erreur
		}
	}
</script>

<form on:submit|preventDefault={handleSaveGreeting}>
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

{#each greetings as greeting}
	<li>
		{greeting.name}: {greeting.message}
		<button on:click={() => prepareUpdate(greeting)}>Modifier</button>
		<button
			on:click={() => handleDeleteGreeting(greeting._id)}
			disabled={editingId === greeting._id}
		>
			Supprimer
		</button>
	</li>
{/each}
