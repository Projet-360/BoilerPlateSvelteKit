import { cursorProps } from '../../store/cursorProps';
import animations from './animations.js'

import { interpolate } from 'flubber';
import { tweened } from 'svelte/motion';
import * as eases from 'svelte/easing';

export const shape = tweened(undefined, {
  interpolate,
  easing: eases.cubicInOut,
  duration: 150
});

export const animateCursor = ({ clientX, clientY }) => {
    if (!Cursor) return;
    cursorProps.update(props => ({
      ...props,
      x: clientX - Cursor.offsetWidth / 2,
      y: clientY - Cursor.offsetHeight / 2
    }));
}
