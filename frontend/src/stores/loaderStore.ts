// loaderStore.ts
import { writable, derived } from 'svelte/store';

export const isInitialLoading = writable(true);

export const domLoader = writable(true);
export const ressourceToValide = writable(true);

// Store dérivé
export const visible = derived(
	[domLoader, ressourceToValide],
	([$domLoader, $ressourceToValide]) => {
		return !$domLoader && !$ressourceToValide;
	}
);

// domLoader.subscribe((value) => {
// 	console.log('domLoader: ', value);
// });

// ressourceToValide.subscribe((value) => {
// 	console.log('ressourceToValide: ', value);
// });

// visible.subscribe((value) => {
// 	console.log('visible: ', value);
// });
