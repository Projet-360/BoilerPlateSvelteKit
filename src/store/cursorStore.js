import { writable } from 'svelte/store';

export const cursorProps = writable({
  Cursor: undefined,
  x: 0,
  y: 0,
  transitionDuration: 0,
  iconScale: 0,
});

export const shaperSVG = writable('circle');