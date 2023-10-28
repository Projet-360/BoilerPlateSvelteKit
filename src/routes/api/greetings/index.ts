import { connectToDatabase } from '$db/database';
import Greeting from '$db/models/GreetingModel';

// Récupérer toutes les salutations
export async function get(request) {
	try {
		await connectToDatabase();
		const greetings = await Greeting.find().lean();
		return {
			status: 200,
			body: greetings
		};
	} catch (error) {
		console.error('Fetch Greetings Error:', error);
		return {
			status: 500,
			body: error.message
		};
	}
}

// Créer une nouvelle salutation
export async function post(request) {
	try {
		await connectToDatabase();
		const { name, message } = request.body;
		const newGreeting = new Greeting({ name, message });
		await newGreeting.save();
		return {
			status: 201,
			body: newGreeting
		};
	} catch (error) {
		console.error('Create Greeting Error:', error);
		return {
			status: 500,
			body: error.message
		};
	}
}

// Mettre à jour une salutation existante
export async function put(request) {
	try {
		await connectToDatabase();
		const { id, name, message } = request.body;
		const updatedGreeting = await Greeting.findByIdAndUpdate(
			id,
			{ name, message },
			{ new: true }
		).lean();
		return {
			status: 200,
			body: updatedGreeting
		};
	} catch (error) {
		console.error('Update Greeting Error:', error);
		return {
			status: 500,
			body: error.message
		};
	}
}

// Supprimer une salutation
export async function del(request) {
	try {
		await connectToDatabase();
		const { id } = request.body;
		await Greeting.findByIdAndDelete(id);
		return {
			status: 204
		};
	} catch (error) {
		console.error('Delete Greeting Error:', error);
		return {
			status: 500,
			body: error.message
		};
	}
}
