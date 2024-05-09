import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

import getGreetingsAPI from './service/getGreetingsAPI';
import createGreeting from './service/createGreetingAPI';
import updateGreeting from './service/updateGreetingAPI';
import deleteGreeting from './service/deleteGreetingAPI';
import setupSocketListeners from './service/setupSocketListeners';

export function GreetingsStore() {
    const { subscribe, set, update }: Writable<App.Greeting[]> = writable<App.Greeting[]>([]);

    return {
        subscribe,
        getGreetings: ($t: App.TranslationFunction) => getGreetingsAPI($t, set),
        createGreeting: (name: string, message: string, $t: App.TranslationFunction) => createGreeting(name, message, $t),
        updateGreeting: (id: string, name: string, message: string, $t: App.TranslationFunction) => updateGreeting(id, name, message, $t),
        deleteGreeting: ( greeting: App.Greeting, $t: App.TranslationFunction) => deleteGreeting(greeting, $t),
        setupSocketListeners: () => setupSocketListeners(update)
    };
}

export const greetingsStore = GreetingsStore();
