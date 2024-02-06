// src/stores/threeStore.js
import { writable } from 'svelte/store';
import * as THREE from 'three';

import { animationService } from '$lib/three/AnimationService';
import { cameraService } from '$lib/three/CameraService'; // Utilisez l'instance directement
import { eventService } from '$lib/three/EventService';
import { helperService } from '$lib/three/HelperService';
import { loaderService } from '$lib/three/LoaderService';
import { renderService } from '$lib/three/RenderService'; // Utilisez l'instance directement
import { sceneService } from '$lib/three/SceneService';

function createThreeStore() {
	const { subscribe, set } = writable({
		renderer: null,
		scene: sceneService.scene, // Utilisez directement l'instance sceneService
		camera: null, // Initialisé plus tard
		animationService,
		eventService,
		helperService,
		loaderService
	});

	return {
		subscribe,
		initialize: () => {
			cameraService.initCamera(); // Assurez-vous d'initialiser la caméra
			renderService.initRenderer(); // Assurez-vous d'initialiser le renderer

			set({
				renderer: renderService.getRenderer(),
				scene: sceneService.scene,
				camera: cameraService.camera,
				animationService,
				eventService,
				helperService,
				loaderService
			});
		},
		dispose: () => {
			if (this.renderer) {
				// Nettoyer les objets de la scène
				scene.traverse((object) => {
					if (object.isMesh) {
						if (object.geometry) object.geometry.dispose();
						if (object.material) {
							Array.isArray(object.material)
								? object.material.forEach((m) => m.dispose())
								: object.material.dispose();
						}
					}
				});

				// Nettoyer le renderer et libérer le contexte WebGL
				this.renderer.dispose();
				this.renderer.forceContextLoss(); // Force la libération du contexte WebGL
				this.renderer = null;
			}
			// Réinitialiser l'état du store
			set({
				renderer: null,
				scene: new THREE.Scene(),
				camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
				animationService,
				eventService,
				helperService,
				loaderService
			});
		}
	};
}

export const threeStore = createThreeStore();
