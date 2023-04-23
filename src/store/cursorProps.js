import { writable } from 'svelte/store';

export const cursorProps = writable({
  Cursor: undefined,
  x: 0,
  y: 0,
  rotation: 0,
  scale: 1,
  color: 'red',
  transitionDuration: 0,
  iconScale: 0,
  selected: undefined,
});