import { writable } from 'svelte/store';

export const cubeState = writable({
	position: { x: 0, y: 0, z: 0 },
	rotation: { x: 0, y: 0, z: 0 }
});
