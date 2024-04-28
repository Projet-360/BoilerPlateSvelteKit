// stores/greetingsStore.ts
import { writable } from 'svelte/store';
import client from '$apollo';
import { GET_GREETINGS, CREATE_GREETING, UPDATE_GREETING, DELETE_GREETING } from '$apollo/Greetings';
import socket from '$api/utils/socket';

function createGreetingsStore() {
    const { subscribe, set, update } = writable([]);

    function setupSocketListeners() {
        socket.on('greetingDeleted', id => {
            console.log("Socket event - greetingDeleted:", id);
            deleteGreetingFromStore(id, false); // No mutation trigger
        });

        return () => {
            socket.off('greetingDeleted');
        }
    }

    async function loadInitialGreetings() {
        try {
            const { data } = await client.query({ query: GET_GREETINGS });
            console.log("Initial greetings loaded:", data.getGreetings);
            set(data.getGreetings);
        } catch (error) {
            console.error("Error loading initial greetings:", error);
        }
    }

    function deleteGreetingFromStore(id, triggerMutation = true) {
        console.log("Deleting greeting:", id, "Trigger mutation:", triggerMutation);
        update(greetings => greetings.filter(g => g.id !== id));
        if (triggerMutation) {
            client.mutate({
                mutation: DELETE_GREETING,
                variables: { id }
            });
        }
    }

    const cleanup = setupSocketListeners();

    return {
        subscribe,
        set,
        loadInitialGreetings,
        deleteGreetingFromStore,
        cleanup
    };
}

export const greetingsStore = createGreetingsStore();
