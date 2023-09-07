import { cursorStore } from './../../stores/cursorStore.js';
import { shapeStore } from './../../stores/shapeStore.js';
import animations from './animations.js';

export function animateCursor(Cursor, { clientX, clientY }) {
  if (!Cursor) return;
  let animationFrameId;
  cancelAnimationFrame(animationFrameId);
  animationFrameId = requestAnimationFrame(() => {
    cursorStore.update(({ x, y }) => ({
      x: clientX - Cursor.offsetWidth / 2,
      y: clientY - Cursor.offsetHeight / 2,
    }));
  });
};

export function updateCursorByName(name, changeShaper) {
  const animation = animations.find(animation => animation.name === name);
  if (animation) {
    const { transitionDuration, shaperForm, scaleSvg, transitionDurationSvg } = animation;
    cursorStore.update(props => ({
      transitionDuration,
      transitionDurationSvg,
      scaleSvg,
    }));
    changeShaper(shaperForm);
  }
};

export function resetCursor(changeShaper) {
  cursorStore.update(props => ({
    ...props,
    transitionDuration: 0.07,
    transitionDurationSvg: 0.07,
    scaleSvg: 1,
  }));
  changeShaper('circle');
};

export function hoverable(node, animationName) {
  const handleMouseOver = () => updateCursorByName(animationName, shapeStore.set);
  const handleFocus = () => updateCursorByName(animationName, shapeStore.set);
  const handleBlur = () => updateCursorByName(animationName, shapeStore.set);
  const handleMouseOut = () => resetCursor(shapeStore.set);

  node.addEventListener('mouseover', handleMouseOver);
  node.addEventListener('focus', handleFocus);
  node.addEventListener('blur', handleBlur);
  node.addEventListener('mouseout', handleMouseOut);

  return {
      destroy() {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('focus', handleFocus);
          node.removeEventListener('blur', handleBlur);
          node.removeEventListener('mouseout', handleMouseOut);
      }
  };
}

