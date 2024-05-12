// setupSocketListeners.ts
import socket from '$apollo/socket';

// Assurez-vous que TS.Greeting est bien le type approprié pour les éléments de la liste des salutations.
function setupSocketListeners(update: (updater: (greetings: TS.Greeting[]) => TS.Greeting[]) => void) {
    socket.on('greetingAdded', (greeting: TS.Greeting) => {
        console.log("Greeting added via socket:", greeting);
        update(greetings => [...greetings, greeting]);
    });

    socket.on('greetingUpdated', (greeting: TS.Greeting) => {
        update((greetings: TS.Greeting[]) => {
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
        update((greetings: TS.Greeting[]) => greetings.filter(g => g.id !== id && g._id !== id));
    });

    return () => {
        socket.off('greetingAdded');
        socket.off('greetingUpdated');
        socket.off('greetingDeleted');
    };
}

export default setupSocketListeners