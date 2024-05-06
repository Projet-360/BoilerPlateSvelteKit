import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

import { getGreetings } from './service/getGreetings';
import { createGreeting } from './service/createGreeting';
import { updateGreeting } from './service/updateGreeting';
import { deleteGreeting } from './service/deleteGreeting';
import { setupSocketListeners } from './service/setupSocketListeners';

export function GreetingsStore() {
    const { subscribe, set, update }: Writable<App.Greeting[]> = writable<App.Greeting[]>([]);

    return {
        subscribe,
        getGreetings: ($t: App.TranslationFunction) => getGreetings($t, set),
        createGreeting: (name: string, message: string, $t: App.TranslationFunction) => createGreeting(name, message, $t),
        updateGreeting: (id: string, name: string, message: string, $t: App.TranslationFunction) => updateGreeting(id, name, message, $t),
        deleteGreeting: ( greeting: App.Greeting, $t: App.TranslationFunction) => deleteGreeting(greeting, $t),
        setupSocketListeners: () => setupSocketListeners(update)
    };
}

export const greetingsStore = GreetingsStore();
