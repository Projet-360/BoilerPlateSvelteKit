import { json } from '@sveltejs/kit';
import { addGreeting, removeGreeting } from '$db/greetings.js';

type Data = {
	success: boolean;
	errors: Record<string, string>;
};

export async function POST({ request }) {
	const formData = await request.formData();
	const name = String(formData.get('name'));
	const message = String(formData.get('message'));

	const data: Data = {
		success: false,
		errors: {}
	};

	if (!greetings) {
		data.errors.greetings = 'required';
		return json(data, { status: 400 });
	}

	addGreeting(name, message);
	data.success = true;

	return json(data);
}

export async function DELETE({ request }) {
	const formData = await request.formData();
	const greetingsId = Number(formData.get('id'));

	removeGreeting(greetingsId);

	return json({ success: true });
}
