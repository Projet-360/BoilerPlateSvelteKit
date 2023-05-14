import { cursorProps, shaperSVG } from '../../store/cursorStore';
import animations from './animations.js'

import { interpolate } from 'flubber';
import { tweened } from 'svelte/motion';
import * as eases from 'svelte/easing';

export const shape = tweened(undefined, {
  interpolate,
  easing: eases.linear,
  duration: 100
});

export const changeCursorShape = (newShape) => {
  const index = animations.findIndex(animation => animation.name === newShape);
  if (index !== -1) {
    const { shapeData } = animations[index];
    shaperSVG.set(shapeData);
  }
}

export const resetCursorShape = () => {
  shaperSVG.set('circle');
}
  
export const animateCursor = ({ clientX, clientY }) => {
    if (!Cursor) return;
    cursorProps.update(props => ({
      ...props,
      x: clientX - Cursor.offsetWidth / 2,
      y: clientY - Cursor.offsetHeight / 2
    }));
}
