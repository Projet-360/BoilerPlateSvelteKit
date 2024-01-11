// loaderStore.ts
import { writable, derived } from 'svelte/store';

export const isInitialLoading = writable(true);

export const domLoader = writable(true);
export const HandleVisible = writable(true);

// Store dérivé
export const visible = derived([domLoader, HandleVisible], ([$domLoader, $HandleVisible]) => {
	return !$domLoader && !$HandleVisible;
});

domLoader.subscribe((value) => {
	console.log('domLoader: ', value);
});

HandleVisible.subscribe((value) => {
	console.log('HandleVisible: ', value);
});
visible.subscribe((value) => {
	console.log('visible: ', value);
});
