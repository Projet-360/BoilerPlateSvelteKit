import { addGreeting, getGreetings, removeGreeting, updateGreeting } from '$db/greetings.js';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	const greetings = await getGreetings();
	return { greetings };
};

export const actions: Actions = {
	addGreeting: async ({ request }) => {
		const formData = await request.formData();
		const name = String(formData.get('name'));
		const message = String(formData.get('message'));

		if (!name || !message || name.length < 3 || message.length < 10) {
			return fail(400, { error: true, errorCode: 400, errorMessage: 'NAME_REQUIRED' });
		}

		// Gérer le résultat et les erreurs
		const result = await addGreeting(name, message);
		if (result.status === 201) {
			return { success: true };
		} else {
			return fail(result.status, { message: result.data.message });
		}
	},
	removeGreeting: async ({ request }) => {
		const formData = await request.formData();
		const greetingId = String(formData.get('id'));
		await removeGreeting(greetingId);
		return { success: true };
	},
	updateGreeting: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		const id = String(formData.get('id'));
		const name = String(formData.get('name'));
		const message = String(formData.get('message'));

		if (!name || !message || name.length < 3 || message.length < 10) {
			return fail(400, { error: true, errorCode: 400, errorMessage: 'NAME_REQUIRED' });
		}

		const result = await updateGreeting(id, name, message);
		if (result.status === 200) {
			const greetings: object = await getGreetings();
			return { success: true, greetings: greetings };
		} else {
			return fail(result.status, { message: result.data.message });
		}
	}
};
