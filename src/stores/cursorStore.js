import { writable } from "svelte/store";

export const cursorStore = writable({
  Cursor: undefined,
  x: 0,
  y: 0,
  transitionDuration: 0,
  transitionDurationSvg: 0.07,
  shaperForm: "circle",
  scaleSvg: 1,
});
