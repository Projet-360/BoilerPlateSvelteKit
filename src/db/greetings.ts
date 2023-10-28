import { useDatabaseConnection } from './database';
import Greeting from './models/GreetingModel';
import { apiError, apiResponse } from './utils/response';

// Fetch all greetings
export const getGreetings = async () => {
	try {
		// Establish database connection
		await useDatabaseConnection();

		const greetings = await Greeting.find().lean();
		if (!greetings || !greetings.length) {
			return apiError(404, 'No greetings found');
		}

		const plainGreetings = greetings.map((g) => ({
			...g,
			_id: g._id.toString()
		}));

		return apiResponse(200, plainGreetings);
	} catch (error) {
		console.error('Error while fetching greetings:', error);
		return apiError(500, 'Internal Server Error');
	}
};

// Add a new greeting
export const addGreeting = async (name: string, message: string) => {
	try {
		// Establish database connection
		await useDatabaseConnection();

		const newGreeting = new Greeting({ name, message });
		await newGreeting.save();
		return apiResponse(201, newGreeting);
	} catch (error) {
		console.error('Error while adding greeting:', error);
		return apiError(500, 'Internal Server Error');
	}
};

// Update an existing greeting
export const updateGreeting = async (id: string, name: string, message: string) => {
	try {
		// Establish database connection
		await useDatabaseConnection();

		const updatedGreeting = await Greeting.findByIdAndUpdate(
			id,
			{ name, message },
			{ new: true }
		).lean();

		if (!updatedGreeting) {
			return apiError(404, 'Greeting not found');
		}
		return apiResponse(200, updatedGreeting);
	} catch (error) {
		console.error('Error while updating greeting:', error);
		return apiError(500, 'Internal Server Error');
	}
};

// Remove a greeting
export const removeGreeting = async (id: string) => {
	try {
		// Establish database connection
		await useDatabaseConnection();

		const deletedGreeting = await Greeting.findByIdAndDelete(id).lean();

		// Check if the greeting was found and deleted
		if (!deletedGreeting) {
			return apiError(404, 'Greeting not found');
		}
		return apiResponse(200, 'Greeting removed successfully');
	} catch (error) {
		console.error('Error while removing greeting:', error);
		return apiError(500, 'Internal Server Error');
	}
};
