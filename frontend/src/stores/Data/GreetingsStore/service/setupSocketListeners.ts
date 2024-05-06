// setupSocketListeners.ts
import socket from '$api/utils/socket';

// Assurez-vous que App.Greeting est bien le type approprié pour les éléments de la liste des salutations.
export function setupSocketListeners(update: (updater: (greetings: App.Greeting[]) => App.Greeting[]) => void) {
    socket.on('greetingAdded', (greeting: App.Greeting) => {
        console.log("Greeting added via socket:", greeting);
        update(greetings => [...greetings, greeting]);
    });

    socket.on('greetingUpdated', (greeting: App.Greeting) => {
        update((greetings: App.Greeting[]) => {
            const index = greetings.findIndex(g => g.id === greeting.id || g._id === greeting._id);
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

    socket.on('greetingDeleted', (id: string) => {
        update((greetings: App.Greeting[]) => greetings.filter(g => g.id !== id && g._id !== id));
    });

    return () => {
        socket.off('greetingAdded');
        socket.off('greetingUpdated');
        socket.off('greetingDeleted');
    };
}
