import { cursorProps, shaperSVG } from '../../store/cursorStore';
import animations from './animations.js'

import { interpolate } from 'flubber';
import { tweened } from 'svelte/motion';
import * as eases from 'svelte/easing';

export const shape = tweened(undefined, {
  interpolate,
  easing: eases.cubicInOut,
  duration: 150
});

export const updateCursorByName = name => {
  const index = animations.findIndex(animation => animation.name === name);
  if (index !== -1) {
    const { shape } = animations[index];
    shaperSVG.update(props => ({
        ...props,
        shape,
    })); 
  }
}

export const resetCursor = () => {
  $shaperSVG 
}


export const changeCursorShape = (newShape) => {
  shaperSVG.set(newShape);
}

export const resetCursorShape = () => {
  shaperSVG.set('circle'); // Ou toute autre forme par défaut
}
  

export const animateCursor = ({ clientX, clientY }) => {
    if (!Cursor) return;
    cursorProps.update(props => ({
      ...props,
      x: clientX - Cursor.offsetWidth / 2,
      y: clientY - Cursor.offsetHeight / 2
    }));
}
