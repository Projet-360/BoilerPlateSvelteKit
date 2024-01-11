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
			{ selector: '.containerCan', animationProps: { opacity: 0, x: 100, duration: 0.7 } },
			{ selector: '.containerText', animationProps: { opacity: 0, x: -100, duration: 0.7 } }
		],
		recettes: [
			{ selector: '.boutique', animationProps: { opacity: 0, y: 100, duration: 0.7 } },
			{ selector: '.about-paragraph-text', animationProps: { opacity: 0, y: 200, duration: 0.7 } }
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
			{
				selector: '.containerCan',
				animationProps: { opacity: 0, y: '-20vw', duration: 1 }
			},
			{
				selector: '.containerText',
				animationProps: { opacity: 0, y: 100, duration: 0.7, delay: 0.5 }
			}
		],
		recettes: [
			{ selector: '.boutique', animationProps: { opacity: 0, y: 100, duration: 0.7 } },
			{ selector: '.about-paragraph-text', animationProps: { opacity: 0, y: 200, duration: 0.7 } }
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
