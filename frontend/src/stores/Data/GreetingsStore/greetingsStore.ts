import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

import getGreetingsAPI from './service/getGreetingsAPI';
import createGreetingAPI from './service/createGreetingAPI';
import updateGreetingAPI from './service/updateGreetingAPI';
import deleteGreetingAPI from './service/deleteGreetingAPI';
import setupSocketListeners from './service/setupSocketListeners';

export function GreetingsStore() {
    const { subscribe, set, update }: Writable<App.Greeting[]> = writable<App.Greeting[]>([]);

    return {
        subscribe,
        getGreetingsAPI: ($t: App.TranslationFunction) => getGreetingsAPI($t, set),
        createGreetingAPI: (name: string, message: string, $t: App.TranslationFunction) => createGreetingAPI(name, message, $t),
        updateGreetingAPI: (id: string, name: string, message: string, $t: App.TranslationFunction) => updateGreetingAPI(id, name, message, $t),
        deleteGreetingAPI: ( greeting: App.Greeting, $t: App.TranslationFunction) => deleteGreetingAPI(greeting, $t),
        setupSocketListeners: () => setupSocketListeners(update)
    };
}

export const greetingsStore = GreetingsStore();
