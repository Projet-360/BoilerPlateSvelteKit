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
    const { pathOptions, transitionDuration, shaperSVG } = animations[index];
    cursorProps.update(props => ({
      ...props,
      transitionDuration,
      pathOptions,
    }));
    shaperSVG.update(props => ({
      ...props,
      shape,
      color
    }));
  }
}

export const resetCursor = () => {
  cursorProps.update(props => ({
      ...props,
      transitionDuration: 0,
      pathOptions:'circle',
      color: 'red'
  }));
  }
  

export const animateCursor = ({ clientX, clientY }) => {
    if (!Cursor) return;
    cursorProps.update(props => ({
      ...props,
      x: clientX - Cursor.offsetWidth / 2,
      y: clientY - Cursor.offsetHeight / 2
    }));
}
