import { cursorProps } from '../../store/cursorProps';
import animations from './animations.js'

import { interpolate } from 'flubber';
import { tweened } from 'svelte/motion';
import * as eases from 'svelte/easing';


export const animateCursor = ({ clientX, clientY }) => {
    if (!Cursor) return;
    cursorProps.update(props => ({
      ...props,
      x: clientX - Cursor.offsetWidth / 2,
      y: clientY - Cursor.offsetHeight / 2
    }));
}

export const shape = tweened(undefined, {
  interpolate,
  easing: eases.cubicInOut,
  duration: 400
});


export const updateCursorByName = name => {
    const index = animations.findIndex(animation => animation.name === name);
    if (index !== -1) {
      const {rotation, scale, color, transitionDuration, iconScale, pathOptions, currentPathIndex, animate, morph, pathCursor } = animations[index];
      cursorProps.update(props => ({
        ...props,
<<<<<<< HEAD
        rotation: 0,
        scale: 1,
        color: 'red',
        transitionDuration: 0,
        iconScale: 0,
        pathOptions: ['circle', 'camera'],
        currentPathIndex: 0,
        animate: false,
        morph: undefined,
        pathCursor: 0,
=======
        rotation,
        scale,
        color,
        transitionDuration,
        iconInside,
        iconScale,
>>>>>>> b6864edd9362423a77a2491db5970e9c5d5d1d19
      }));
    }
}

export const resetCursor = () => {
cursorProps.update(props => ({
    ...props,
    rotation: 0,
    scale: 1,
    transitionDuration: 0.07,
    iconScale: 0
}));
}
<<<<<<< HEAD
=======

export const animateclick = (path) => {
  cursorProps.animate = !cursorProps.animate;
  if (cursorProps.setanimate) {
    currentPathIndex = cursorProps.pathOptions.indexOf(path);
    morph = interpolate(cursorProps.pathOptions.map(option => `#${option}`), { precision: 1 });
    progress.set(1);
  } else {
    progress.set(0);
  }
}
>>>>>>> b6864edd9362423a77a2491db5970e9c5d5d1d19
