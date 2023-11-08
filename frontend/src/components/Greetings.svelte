<script lang="ts">
	import { onMount } from 'svelte';
	import socket from '$api/utils/socket';
	import { saveGreeting, getAllGreetings, deleteGreeting } from '$api/greetingsAPI';
	import { t } from '$UITools/Translations/index';
	import {
		greetingsStore,
		setGreetings,
		deleteGreeting as deleteGreetingFromStore,
		updateGreeting as updateGreetingInStore
	} from '$stores/greetingsStore';
	import { messageNotification } from '$modelNotifications/messageNotification';

	let editingId: string | null = null;
	let name: string = '';
	let message: string = '';

	// Souscrire au magasin Svelte
	const unsubscribe = greetingsStore.subscribe((value) => {
		// Cette fonction est appelée à chaque mise à jour du magasin
		// Vous pouvez utiliser 'value' pour faire des choses avec les données du magasin
	});

	onMount(async () => {
		const response = await getAllGreetings();
		if (response.success) {
			setGreetings(response.data);
		} else {
			// Gérer l'erreur, par exemple avec une notification ou un message d'erreur
		}

		const updateGreetingsHandler = async () => {
			const updateResponse = await getAllGreetings();
			if (updateResponse.success) {
				setGreetings(updateResponse.data);
			} else {
				// Gérer l'erreur
			}
		};

		socket.on('updateGreetings', updateGreetingsHandler);

		return () => {
			// Se désinscrire du magasin et retirer l'écouteur d'événements du socket
			unsubscribe();
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
			socket.emit('saveGreetingSocket');
			// Mettre à jour le magasin après l'ajout ou la mise à jour d'une salutation
			if (saveResponse.data) {
				updateGreetingInStore(saveResponse.data._id, saveResponse.data);
			}
		} else {
			messageNotification(
				saveResponse.error?.message || 'Une erreur est survenue lors de la sauvegarde.',
				$t
			);
		}
	}

	export async function handleDeleteGreeting(id: string): Promise<void> {
		const deleteResponse = await deleteGreeting(id);
		if (deleteResponse.success) {
			deleteGreetingFromStore(id);
			socket.emit('deleteGreetingSocket');
		} else {
			messageNotification(
				deleteResponse.error?.message || 'Une erreur est survenue lors de la suppression.',
				$t
			);
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

{#each $greetingsStore as greeting}
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
