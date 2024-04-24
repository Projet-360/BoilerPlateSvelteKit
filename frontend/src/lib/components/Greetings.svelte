<!-- <script lang="ts">
	import { onMount } from 'svelte';
	import {
		prepareUpdate,
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

	const save = async () => {
		await handleSaveGreeting(name, message, editingId, $t);
	};
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
		<button on:click={() => prepareUpdate(greeting)}>Modifier</button>
		<button
			on:click={() => handleDeleteGreeting(greeting._id)}
			disabled={editingId === greeting._id}
		>
			Supprimer
		</button>
	</li>
{/each} -->

<script>
	import { onMount } from 'svelte';
	import client, { gql } from '$lib/Apollo';

	const GET_GREETINGS = gql`
		query GetGreetings {
			getGreetings {
				id
				name
				message
			}
		}
	`;

	let greetings = [];

	onMount(async () => {
		try {
			const { data } = await client.query({ query: GET_GREETINGS });
			greetings = data.getGreetings;
		} catch (error) {
			console.error("Error fetching greetings:", error);
		}
	});
</script>

{#if greetings.length > 0}
	<ul>
		{#each greetings as greeting}
			<li>
				<b>{greeting.name}</b>: {greeting.message} (ID: {greeting.id})
			</li>
		{/each}
	</ul>
{:else}
	<p>Loading greetings or none found...</p>
{/if}
