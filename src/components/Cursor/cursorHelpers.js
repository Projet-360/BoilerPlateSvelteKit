import { cursorStore } from './../../stores/cursorStore.js';
import { shapeStore } from './../../stores/shapeStore.js';
import animations from './animations.js';

let animationFrameId;

export function animateCursor(Cursor, { clientX, clientY }) {
    if (!Cursor) return;
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => {
        const newX = clientX - Cursor.offsetWidth / 2;
        const newY = clientY - Cursor.offsetHeight / 2;

        cursorStore.update(() => ({
            x: newX,
            y: newY,
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
    transitionDuration: 0.02,
    transitionDurationSvg: 0.02,
    scaleSvg: 1,
  }));
  changeShaper('circle');
};

export function hoverable(node, animationName) {
  const handleCursorUpdate = () => updateCursorByName(animationName, shapeStore.set);
  const handleCursorReset = () => resetCursor(shapeStore.set);

  node.addEventListener('mouseover', handleCursorUpdate);
  node.addEventListener('focus', handleCursorUpdate);
  node.addEventListener('blur', handleCursorUpdate);
  node.addEventListener('mouseout', handleCursorReset);

  return {
      destroy() {
          node.removeEventListener('mouseover', handleCursorUpdate);
          node.removeEventListener('focus', handleCursorUpdate);
          node.removeEventListener('blur', handleCursorUpdate);
          node.removeEventListener('mouseout', handleCursorReset);
      }
  };
}

