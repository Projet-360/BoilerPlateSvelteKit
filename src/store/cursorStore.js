import { writable } from 'svelte/store';

export const cursorProps = writable({
  Cursor: undefined,
  x: 0,
  y: 0,
  scale: 1,
  durationTransitionCursorSvg: .2
});

export const shaperSVG = writable('circle');