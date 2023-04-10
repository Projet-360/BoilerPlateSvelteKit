import { cursorProps } from '../../store/store';
import animations from './animations.js'

export const animateCursor = ({ clientX, clientY }) => {
    if (!Cursor) return;
    cursorProps.update(props => ({
      ...props,
      x: clientX - Cursor.offsetWidth / 2,
      y: clientY - Cursor.offsetHeight / 2
    }));
}

export const updateCursorByName = name => {
    const index = animations.findIndex(animation => animation.name === name);
    if (index !== -1) {
      const { rotation, scale, animation, color, transitionDuration, iconInside, iconScale } = animations[index];
      cursorProps.update(props => ({
        ...props,
        rotation,
        scale,
        clipPath: animation,
        color,
        transitionDuration,
        iconInside,
        iconScale,
      }));
    }
}

export const resetCursor = () => {
cursorProps.update(props => ({
    ...props,
    rotation: 0,
    scale: 1,
    clipPath: 'circle(50% at 50% 50%)',
    color: 'red',
    transitionDuration: 0.07,
    iconInside: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/SVG_Simple_Icon.svg',
    iconScale: 0
}));
}

