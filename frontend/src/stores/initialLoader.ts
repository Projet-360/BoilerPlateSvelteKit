// loaderStore.ts
import { writable, derived } from 'svelte/store';

// Structure centralisée pour les états de chargement
const loadingStates = writable({
	firstLoadComplete: false,
	domLoaded: false,
	handleVisible: false
	// Autres ressources si nécessaire
});

export const firstLoadComplete = derived(
	loadingStates,
	($loadingStates) => $loadingStates.firstLoadComplete
);

// Store dérivé pour déterminer si l'initialisation est terminée
export const isInitialLoading = derived(loadingStates, ($loadingStates) => {
	return Object.values($loadingStates).includes(false);
});

export function setFirstLoadComplete() {
	loadingStates.update((states) => ({ ...states, firstLoadComplete: true }));
}

// Fonctions pour mettre à jour les états de chargement
export function setDomLoaded(value) {
	loadingStates.update((states) => ({ ...states, domLoaded: value }));
}

export function setHandleVisible(value) {
	loadingStates.update((states) => ({ ...states, handleVisible: value }));
}

// Logs pour le débogage (peut être retiré en production)
loadingStates.subscribe(($loadingStates) => {
	console.log('Loading States: ', $loadingStates);
});

// comment modifier le state dans un composant:
//   onMount(() => {
//     // Supposons que le DOM est maintenant chargé
//     setDomLoaded(true);

//     // Vous pouvez également appeler setHandleVisible en fonction de certaines actions
//     // Exemple : setHandleVisible(true ou false);
//   });

//   // Fonction pour gérer une certaine action qui modifie handleVisible
//   function handleAction() {
//     setHandleVisible(true); // ou false, selon la logique
//   }
