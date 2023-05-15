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

export const animCursor = (name) => {
  const index = animations.findIndex(animation => animation.name === name);
  if (index !== -1) {
    const { shapeData, scale, durationTransitionCursorSvg } = animations[index];

    shaperSVG.set(shapeData);

    cursorProps.update(props => ({
      ...props,
      scale: scale,
      durationTransitionCursorSvg: durationTransitionCursorSvg,
    }));
  }
}

export const resetCursor = () => {
  cursorProps.update(props => ({
    ...props,
    scale: 1,
    durationTransitionCursorSvg: .25,
  }));

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
