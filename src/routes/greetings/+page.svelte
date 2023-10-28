<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';
	import notificationStore from '$stores/notificationStore';
	import { t } from '$UITools/Translations';

	const handleFormErrors = (form: ActionData) => {
		if (form?.error) {
			console.log(`Error Code: ${form.errorCode}, Error Message: ${form.errorMessage}`);
			notificationStore.addNotification($t(`validation.${form.errorMessage}`), 'error');
		}
	};

	export let data: PageData;
	export let form: ActionData;

	$: greetings = data.greetings.data || [];

	let name = '';
	let message = '';

	let selectedGreeting: App.Greeting | null = null;

	const editGreeting = (greeting: App.Greeting) => {
		console.log('Data received in editGreeting:', greeting);
		selectedGreeting = greeting;
		name = selectedGreeting.name;
		message = selectedGreeting.message;
		console.log('Name and Message after assignment:', name, message);
	};

	const handleSubmit = async (event: Event) => {
		event.preventDefault();
		resetForm();
	};

	const resetForm = () => {
		name = '';
		message = '';
		selectedGreeting = null;
	};

	$: handleFormErrors(form);

	// Forcing reactivity (for debugging)
	$: name, void 0;
	$: message, void 0;
</script>

<form
	use:enhance
	on:submit={handleSubmit}
	method="POST"
	action={selectedGreeting ? `?/updateGreeting` : `?/addGreeting`}
>
	<input value={name} name="name" placeholder="Nom" />
	<input value={message} name="message" placeholder="Message" />
	{#if selectedGreeting}
		<input type="hidden" name="id" value={selectedGreeting._id} />
	{/if}
	<button type="submit">{selectedGreeting ? 'Modifier' : 'Ajouter'}</button>
</form>

{#if Array.isArray(greetings)}
	<ul>
		{#each greetings as greeting}
			<li>{greeting.message} - {greeting.name}</li>
			<button on:click={() => editGreeting(greeting)}>✏️</button>
			<form use:enhance method="POST" action="?/removeGreeting">
				<input type="hidden" name="id" value={greeting._id} />
				<button class="delete" type="submit">❌</button>
			</form>
		{/each}
	</ul>
{:else}
	<p>Pas de salutations trouvées.</p>
{/if}
