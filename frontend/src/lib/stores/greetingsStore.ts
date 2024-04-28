import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import socket from '$api/utils/socket';
import client from '$apollo';
import { GET_GREETINGS, CREATE_GREETING, UPDATE_GREETING, DELETE_GREETING } from '$apollo/Greetings';

function createGreetingsStore() {
    const { subscribe, set, update } = writable([]);

    // Écouter les événements Socket.io pour les mises à jour globales
    function setupSocketListeners() {
        socket.on('greetingAdded', greeting => {
            addGreeting(greeting, false);
        });

        socket.on('greetingUpdated', greeting => {
            updateGreetingInStore(greeting.id, greeting, false);
        });

        socket.on('greetingDeleted', id => {
            deleteGreetingFromStore(id, false);
        });
    }

	async function loadInitialGreetings() {
        try {
            const { data } = await client.query({ query: GET_GREETINGS });
            set(data.getGreetings);
        } catch (error) {
            console.error("Erreur lors de la récupération des salutations initiales:", error);
        }
    }


    function addGreeting(greeting, triggerMutation = true) {
        update(greetings => [greeting, ...greetings]);
        if (triggerMutation) {
            client.mutate({
                mutation: CREATE_GREETING,
                variables: { name: greeting.name, message: greeting.message }
            });
        }
    }

    function updateGreetingInStore(id, updatedGreeting, triggerMutation = true) {
        update(greetings =>
            greetings.map(g => g.id === id ? { ...g, ...updatedGreeting } : g)
        );
        if (triggerMutation) {
            client.mutate({
                mutation: UPDATE_GREETING,
                variables: { id, name: updatedGreeting.name, message: updatedGreeting.message }
            });
        }
    }

    function deleteGreetingFromStore(id, triggerMutation = true) {
        update(greetings => greetings.filter(g => g.id !== id));
        if (triggerMutation) {
            client.mutate({
                mutation: DELETE_GREETING,
                variables: { id }
            });
        }
    }

    setupSocketListeners();

    return {
        subscribe,
        set,
		loadInitialGreetings, 
        addGreeting,
        updateGreetingInStore,
        deleteGreetingFromStore
    };
}

export const greetingsStore = createGreetingsStore();