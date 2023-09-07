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
  node.addEventListener('mouseover', () => updateCursorByName(animationName, shapeStore.set));
  node.addEventListener('focus', () => updateCursorByName(animationName, shapeStore.set));
  node.addEventListener('blur', () => updateCursorByName(animationName, shapeStore.set));
  node.addEventListener('mouseout', () => resetCursor(shapeStore.set));

  return {
      destroy() {
          node.removeEventListener('mouseover', () => updateCursorByName(animationName, shapeStore.set));
          node.removeEventListener('focus', () => updateCursorByName(animationName, shapeStore.set));
          node.removeEventListener('blur', () => updateCursorByName(animationName, shapeStore.set));
          node.removeEventListener('mouseout', () => resetCursor(shapeStore.set));
      }
  };
}

