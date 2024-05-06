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
        createGreeting: ($t: App.TranslationFunction, name: string, message: string) => createGreeting(name, message, $t),
        updateGreeting: ($t: App.TranslationFunction, id: string, name: string, message: string) => updateGreeting(id, name, message, $t, update),
        deleteGreeting: ($t: App.TranslationFunction, greeting: App.Greeting) => deleteGreeting(greeting, $t, update),
        setupSocketListeners: () => setupSocketListeners(update)
    };
}

export const greetingsStore = GreetingsStore();
