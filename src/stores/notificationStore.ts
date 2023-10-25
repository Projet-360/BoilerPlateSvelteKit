import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Notification } from '../typescript';

// Structure initiale du store
const initialNotifications: Notification[] = [];

// Création du store
const notifications: Writable<Notification[]> = writable(initialNotifications);

// Fonction pour ajouter une notification
function addNotification(message: string, type: string): void {
	const id = new Date().getTime(); // Utiliser le timestamp comme ID unique
	notifications.update((currentNotifications) => [...currentNotifications, { id, message, type }]);
}

// Fonction pour supprimer une notification
function removeNotification(id: number): void {
	notifications.update((currentNotifications) =>
		currentNotifications.filter((notif) => notif.id !== id)
	);
}

export default {
	subscribe: notifications.subscribe,
	addNotification,
	removeNotification
};
