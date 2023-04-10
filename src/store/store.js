import { writable } from 'svelte/store';

export const cursorProps = writable({
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    clipPath: 'circle(50% at 50% 50%)',
    color: 'red',
    transitionDuration: 0,
    iconInside: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/SVG_Simple_Icon.svg',
    iconScale: 0
});