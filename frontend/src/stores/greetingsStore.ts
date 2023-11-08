// store.ts
import { writable } from 'svelte/store';

export const greetingsStore = writable<App.Greeting[]>([]);

export const setGreetings = (greetings: App.Greeting[]) => {
	greetingsStore.set(greetings);
};

export const addGreeting = (greeting: App.Greeting) => {
	greetingsStore.update((currentGreetings) => {
		return [...currentGreetings, greeting];
	});
};

export const updateGreeting = (id: string, updatedFields: Partial<App.Greeting>) => {
	greetingsStore.update((currentGreetings) => {
		return currentGreetings.map((greeting) =>
			greeting._id === id ? { ...greeting, ...updatedFields } : greeting
		);
	});
};

export const deleteGreeting = (id: string) => {
	greetingsStore.update((currentGreetings) => {
		return currentGreetings.filter((greeting) => greeting._id !== id);
	});
};
