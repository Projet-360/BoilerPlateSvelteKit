<script>
	import { onMount, onDestroy } from 'svelte';
	import { threeStore } from '$stores/threeStore';
	import * as THREE from 'three';

	let container;
	let animationFrameId; // Pour stocker l'identifiant de la boucle d'animation

	onMount(() => {
		threeStore.initialize();
		const unsubscribe = threeStore.subscribe(({ renderer, scene, camera }) => {
			console.log(renderer);
			console.log(scene);
			console.log(camera);
			if (renderer && container && !container.firstChild) {
				container.appendChild(renderer.domElement);

				const geometry = new THREE.BoxGeometry(1, 1, 1); // Ou SphereGeometry pour la sphère
				const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
				const mesh = new THREE.Mesh(geometry, material);
				scene.add(mesh);

				camera.position.set(0, 0, 5);

				function animate() {
					animationFrameId = requestAnimationFrame(animate);
					renderer.render(scene, camera);
				}

				animate();
			}
		});

		return () => {
			unsubscribe();
			if (animationFrameId) cancelAnimationFrame(animationFrameId);
			if (container && container.firstChild) {
				container.removeChild(container.firstChild); // Supprime le canvas du DOM
			}
			threeStore.dispose();
		};
	});

	onDestroy(() => {
		// Nettoyage spécifique de Three.js
		threeStore.subscribe(({ scene, renderer }) => {
			scene.traverse((object) => {
				if (object.isMesh) {
					object.geometry.dispose();
					if (object.material.isMaterial) {
						cleanMaterial(object.material);
					} else if (Array.isArray(object.material)) {
						object.material.forEach(cleanMaterial);
					}
				}
			});
			if (renderer) renderer.dispose(); // Nettoie le renderer et le contexte WebGL
		})();
	});

	function cleanMaterial(material) {
		Object.keys(material).forEach((prop) => {
			if (material[prop] && typeof material[prop].dispose === 'function') {
				material[prop].dispose();
			}
		});
	}
</script>

<div bind:this={container}></div>

<style>
	div {
		width: 100%;
		height: 100vh;
		display: block;
	}
</style>
