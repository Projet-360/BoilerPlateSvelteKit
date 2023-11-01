import { cursorStore } from '$stores/cursorStore';
import { shapeStore } from '$stores/shapeStore';
import animations from './animations';

let animationFrameId: number;

export function animateCursor(
	Cursor: HTMLElement | null,
	{ clientX, clientY }: { clientX: number; clientY: number }
): void {
	if (!Cursor) return;
	cancelAnimationFrame(animationFrameId);
	animationFrameId = requestAnimationFrame(() => {
		const newX: number = clientX - Cursor.offsetWidth / 2;
		const newY: number = clientY - Cursor.offsetHeight / 2;

		cursorStore.update((prevState) => ({
			...prevState,
			x: newX,
			y: newY
		}));
	});
}

export function updateCursorByName(name: string, changeShaper: (shape: string) => void): void {
	const animation = animations.find((animation) => animation.name === name);
	if (animation) {
		const { transitionDuration, shaperForm, scaleSvg, transitionDurationSvg } = animation;
		cursorStore.update((props) => ({
			...props,
			transitionDuration,
			transitionDurationSvg,
			scaleSvg
		}));
		changeShaper(shaperForm);
	}
}

export function resetCursor(changeShaper: (shape: string) => void): void {
	cursorStore.update((props) => ({
		...props,
		transitionDuration: 0.02,
		transitionDurationSvg: 0.02,
		scaleSvg: 1
	}));
	changeShaper('circle');
}

export function hoverable(node: HTMLElement, animationName: string): { destroy: () => void } {
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
