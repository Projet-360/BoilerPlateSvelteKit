import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export interface Greeting {
	_id: string;
	name: string;
	message: string;
}

export const greetingsStore: Writable<Greeting[]> = writable([]);

export const setGreetings = (greetings: Greeting[]) => {
	greetingsStore.set(greetings);
};

export const addGreeting = (greeting: Greeting) => {
	greetingsStore.update((currentGreetings) => [...currentGreetings, greeting]);
};

export const updateGreetingInStore = (id: string, updatedFields: Partial<Greeting>) => {
	greetingsStore.update((currentGreetings) =>
		currentGreetings.map((g) => (g._id === id ? { ...g, ...updatedFields } : g))
	);
};

export const deleteGreetingFromStore = (id: string) => {
	greetingsStore.update((currentGreetings) => currentGreetings.filter((g) => g._id !== id));
};
