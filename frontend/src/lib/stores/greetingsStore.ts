import { writable } from 'svelte/store';
import socket from '$api/utils/socket';
import client from '$apollo';
import { GET_GREETINGS, CREATE_GREETING, UPDATE_GREETING, DELETE_GREETING } from '$apollo/Greetings';

export function createGreetingsStore() {
    const { subscribe, set, update } = writable([]);

    async function loadInitialGreetings() {
        console.log("Loading initial greetings...");
        try {
            const { data } = await client.query({ query: GET_GREETINGS });
            console.log("Initial greetings loaded:", data.getGreetings);
			set([]); 
            set(data.getGreetings);
        } catch (error) {
            console.error("Error loading initial greetings:", error);
        }
    }

    function setupSocketListeners() {
        socket.on('greetingAdded', greeting => {
            console.log("Greeting added via socket:", greeting);
            update(greetings => [...greetings, greeting]);
        });
		socket.on('greetingUpdated', (greeting) => {
			update(greetings => {
				const index = greetings.findIndex(g => g.id === greeting.id);
				if (index !== -1) {
					console.log("Updating existing greeting from socket:", greeting);
					const updatedGreetings = [...greetings];
					updatedGreetings[index] = greeting;
					return updatedGreetings;
				} else {
					console.log("Received update for non-existing greeting, adding new:", greeting);
					return [...greetings, greeting];
				}
			});
		});
        socket.on('greetingDeleted', id => {
            console.log("Greeting deleted via socket:", id);
            update(greetings => greetings.filter(g => g.id !== id));
        });

        return () => {
            socket.off('greetingAdded');
            socket.off('greetingUpdated');
            socket.off('greetingDeleted');
        };
    }

	async function addGreeting(name: string, message: string) {
		console.log("Sending request to add greeting:", name, message);
		const { data } = await client.mutate({
			mutation: CREATE_GREETING,
			variables: { name, message }
		});
		console.log("Greeting sent to be added, waiting for socket confirmation:", data.createGreeting);
	}

    async function updateGreeting(id: string, name: string, message: string) {
        console.log("Updating greeting:", id);
        try {
            const { data } = await client.mutate({
                mutation: UPDATE_GREETING,
                variables: { id, name, message }
            });
            console.log("Greeting updated:", data.updateGreeting);
        } catch (error) {
            console.error("Error updating greeting:", error);
        }
    }

    async function deleteGreeting(id: string) {
        console.log("Deleting greeting:", id);
        try {
            await client.mutate({
                mutation: DELETE_GREETING,
                variables: { id }
            });
        } catch (error) {
            console.error("Error deleting greeting:", error);
        }
    }

    return {
        subscribe,
        loadInitialGreetings, 
        addGreeting,
        updateGreeting,
        deleteGreeting,
        setupSocketListeners
    };
}

export const greetingsStore = createGreetingsStore();
