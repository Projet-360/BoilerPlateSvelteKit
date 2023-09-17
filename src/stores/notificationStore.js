import { writable } from "svelte/store";

// Structure initiale du store
const initialNotifications = [];

// Création du store
const notifications = writable(initialNotifications);

// Fonction pour ajouter une notification
function addNotification(message, type) {
  const id = new Date().getTime(); // Utiliser le timestamp comme ID unique
  notifications.update((currentNotifications) => [
    ...currentNotifications,
    { id, message, type },
  ]);
}

// Fonction pour supprimer une notification
function removeNotification(id) {
  notifications.update((currentNotifications) =>
    currentNotifications.filter((notif) => notif.id !== id),
  );
}

export default {
  subscribe: notifications.subscribe,
  addNotification,
  removeNotification,
};
