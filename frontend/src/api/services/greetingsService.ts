import { getAllGreetings, saveGreeting, deleteGreeting } from '$api/greetingsAPI';
import {
	setGreetings,
	addGreeting,
	updateGreetingInStore,
	deleteGreetingFromStore
} from '$lib/stores/greetingsStore';
import socket from '$api/utils/socket';
import type { Greeting } from '$lib/stores/greetingsStore';
import { messageNotification } from '$modelNotifications/messageNotification';

export const loadGreetings = async (): Promise<void> => {
	const response = await getAllGreetings();
	if (response.success) {
		setGreetings(response.data);
	} else {
		// Handle error, e.g., show notification
	}
};

export const initSocketListeners = (): (() => void) => {
	const updateGreetingsHandler = () => {
		loadGreetings();
	};

	socket.on('updateGreetings', updateGreetingsHandler);

	return () => {
		socket.off('updateGreetings', updateGreetingsHandler);
	};
};

export const prepareUpdate = (
	greeting: Greeting
): { name: string; message: string; editingId: string } => {
	return {
		name: greeting.name,
		message: greeting.message,
		editingId: greeting._id
	};
};

export const handleSaveGreeting = async (
	name: string,
	message: string,
	editingId: string | null,
	$t: App.TranslationFunction
): Promise<void> => {
	const saveResponse = await saveGreeting(name, message, editingId, $t);
	if (saveResponse.success) {
		// Clear the form fields and editingId
		name = '';
		message = '';
		editingId = null;

		// Emit the socket event to inform other clients
		socket.emit('saveGreetingSocket');
		// Update the store accordingly
		if (editingId) {
			messageNotification(editingId, $t);
			updateGreetingInStore(editingId, { name, message });
		} else {
			messageNotification(editingId, $t);
			addGreeting(saveResponse.data);
		}
	} else {
		// Handle error, e.g., show notification
	}
};

export const handleDeleteGreeting = async (id: string): Promise<void> => {
	const deleteResponse = await deleteGreeting(id);
	if (deleteResponse.success) {
		deleteGreetingFromStore(id);
		socket.emit('deleteGreetingSocket');
	} else {
		// Handle error, e.g., show notification
	}
};
