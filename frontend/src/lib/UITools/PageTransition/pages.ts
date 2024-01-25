import { gsap } from 'gsap';

// Interface pour typer les éléments du layoutContainer
interface LayoutElement {
	selector: string;
	animationProps: gsap.TweenVars;
}

// Fonction pour animer des éléments spécifiques
const animateSpecificElements = (
	elements: LayoutElement[],
	layoutContainer: HTMLElement,
	method: 'from' | 'to'
) => {
	elements.forEach((element) => {
		const targets = layoutContainer.querySelectorAll(element.selector);
		if (targets.length === 0) {
			console.warn(`Aucun élément trouvé pour le sélecteur : ${element.selector}`);
			return;
		}
		targets.forEach((target) => {
			gsap[method](target, element.animationProps);
		});
	});
};

// Fonction pour animer en sortie
export const animateOut = (
	classUrlFrom: string | undefined | null,
	layoutContainer: HTMLElement
) => {
	const animationsForPage: { [key: string]: LayoutElement[] } = {
		home: [
			{ selector: 'main h1', animationProps: { opacity: 0, y: 100, duration: 0.7 } },
			{ selector: 'main p', animationProps: { opacity: 0, y: -100, duration: 0.7 } },
			{ selector: 'main div', animationProps: { opacity: 0, y: -100, duration: 0.7 } },
			{ selector: 'main form', animationProps: { opacity: 0, y: -100, duration: 0.7 } }
		],
		about: [
			{ selector: 'main h1', animationProps: { opacity: 0, y: 100, duration: 0.7 } },
			{ selector: 'main p', animationProps: { opacity: 0, y: 100, duration: 0.7 } },
			{ selector: 'main a', animationProps: { opacity: 0, y: 100, duration: 0.7 } }
		]
	};

	const elementsToAnimate = animationsForPage[classUrlFrom ?? 'default'] ?? [];
	animateSpecificElements(elementsToAnimate, layoutContainer, 'to');

	return gsap
		.to(layoutContainer, {
			duration: 0.7,
			opacity: 0,
			x: 0,
			onComplete: () => {
				gsap.set(layoutContainer, { clearProps: 'all' });
			}
		})
		.then();
};

// Fonction pour animer en entrée
export const animateIn = (classUrlTo: string | undefined | null, layoutContainer: HTMLElement) => {
	// Définition des animations spécifiques pour chaque page
	const animationsForPage: { [key: string]: LayoutElement[] } = {
		home: [
			{ selector: 'main h1', animationProps: { opacity: 0, y: 100, duration: 0.7 } },
			{ selector: 'main p', animationProps: { opacity: 0, y: -100, duration: 0.7 } },
			{ selector: 'main a', animationProps: { opacity: 0, y: -100, duration: 0.7 } },
			{ selector: 'main canvas', animationProps: { opacity: 0, y: -100, duration: 0.7 } },
			{ selector: 'main form', animationProps: { opacity: 0, y: -100, duration: 0.7 } }
		],
		about: [
			{ selector: 'main h1', animationProps: { opacity: 0, y: 100, duration: 0.7 } },
			{ selector: 'main p', animationProps: { opacity: 0, y: 100, duration: 0.7 } },
			{ selector: 'main a', animationProps: { opacity: 0, y: 100, duration: 0.7 } }
		]
	};

	const elementsToAnimate = animationsForPage[classUrlTo ?? 'default'] ?? [];
	animateSpecificElements(elementsToAnimate, layoutContainer, 'from');

	return gsap
		.from(layoutContainer, {
			duration: 0.7,
			opacity: 0,
			x: 0,
			onComplete: () => {
				gsap.set(layoutContainer, { clearProps: 'all' });
			}
		})
		.then();
};
