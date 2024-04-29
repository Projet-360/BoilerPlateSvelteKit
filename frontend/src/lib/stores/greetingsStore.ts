import { writable } from 'svelte/store';
import socket from '$api/utils/socket';
import client from '$apollo';
import { GET_GREETINGS, CREATE_GREETING, UPDATE_GREETING, DELETE_GREETING } from '$apollo/Greetings';

import notificationStore from '$lib/stores/notificationStore';
import { messageNotification } from '$modelNotifications/messageNotification';

export function createGreetingsStore() {
    const { subscribe, set, update } = writable([]);

	async function loadInitialGreetings($t: App.TranslationFunction) {
		try {
			const { data } = await client.query({ query: GET_GREETINGS, fetchPolicy: 'network-only' });

			set(data.getGreetings.map((greeting: App.Greeting) => ({
				...greeting,
				_id: greeting.id
			})));

			notificationStore.addNotification($t('data.greetingsSuccessGet'), 'success');
		} catch (error) {
			notificationStore.addNotification($t('data.greetingsSuccessGet'), 'error');
		}
	}

    function setupSocketListeners() {
        socket.on('greetingAdded', (greeting: App.Greeting) => {
            console.log("Greeting added via socket:", greeting);
            update(greetings => [...greetings, greeting]);
        });
		socket.on('greetingUpdated', (greeting: App.Greeting) => {	
			update(greetings => {
				const index = greetings.findIndex(g => {
					return g.id === greeting._id;  // Assurez-vous de retourner le résultat de la comparaison
				});		
				if (index !== -1) {
					console.log("Updating existing greeting from socket:", greeting);
					const updatedGreetings = [...greetings];
					updatedGreetings[index] = greeting;  // Assurez-vous que cette affectation est correcte
					return updatedGreetings;
				} else {
					console.log("Received update for non-existing greeting, adding new:", greeting);
					return [...greetings, greeting];
				}
			});
		});
        socket.on('greetingDeleted', id => {
            update(greetings => greetings.filter(g => {
                g._id !== id
            }));
        });

        return () => {
            socket.off('greetingAdded');
            socket.off('greetingUpdated');
            socket.off('greetingDeleted');
        };
    }

    async function addGreeting(name: string, message: string, $t: App.TranslationFunction) {
        try {
            const { data } = await client.mutate({
                mutation: CREATE_GREETING,
                variables: { name, message }
            });
            notificationStore.addNotification($t('data.greetingsSuccessSent'), 'success');
        } catch (error) {
            console.error("Error adding greeting:", error);
            messageNotification(error, $t);
        }
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

    async function deleteGreeting(greeting: any) {
        console.log("Deleting greeting:", greeting._id);
        let id = greeting._id
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
