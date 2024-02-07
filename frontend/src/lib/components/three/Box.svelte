<script>
	import { onMount, onDestroy } from 'svelte';
	import { threeStore } from '$stores/threeStore';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { DragControls } from 'three/examples/jsm/controls/DragControls.js';

	let container; // DOM element to bind the renderer
	let scene, camera, renderer; // Three.js essentials
	let controls, dragControls; // Controls for the scene
	let cube1, cube2; // The cubes to be dragged and dropped

	// Initialize the scene with cubes and controls
	function initScene() {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(
			75,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		renderer = new THREE.WebGLRenderer();
		renderer.setSize(container.clientWidth, container.clientHeight);
		container.appendChild(renderer.domElement);

		// Add orbit controls
		controls = new OrbitControls(camera, renderer.domElement);
		camera.position.set(0, 0, 5);

		// Initialize and add cubes to the scene
		initCubes();

		// Add drag controls
		initDragControls();

		// Animation loop
		animate();
	}

	// Initialize cubes
	function initCubes() {
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
		cube1 = new THREE.Mesh(geometry, material1);
		cube2 = new THREE.Mesh(geometry, material2);
		cube1.position.x = -2;
		cube2.position.x = 2;
		scene.add(cube1);
		scene.add(cube2);
	}

	// Initialize drag controls
	function initDragControls() {
		const objects = [cube1, cube2];
		dragControls = new DragControls(objects, camera, renderer.domElement);

		// Désactive OrbitControls lors du début du drag
		dragControls.addEventListener('dragstart', function (event) {
			controls.enabled = false;
		});

		// Réactive OrbitControls après le drag
		dragControls.addEventListener('dragend', function (event) {
			controls.enabled = true;
		});

		// Ajoute l'effet magnétique et la logique de déplacement lors de l'événement de drag
		dragControls.addEventListener('drag', function (event) {
			checkMagneticEffect(event.object);
		});
	}

	// Check for magnetic effect during drag
	function checkMagneticEffect(draggedObject) {
		const targetCube = draggedObject === cube1 ? cube2 : cube1; // Determine the other cube
		const distance = draggedObject.position.distanceTo(targetCube.position);

		// Taille des cubes (supposons qu'ils sont identiques et que la taille est 1)
		const cubeSize = 1;

		// Distance à laquelle l'effet magnétique s'applique
		const magneticThreshold = 1.5;

		if (distance < magneticThreshold) {
			// Calculer la nouvelle position pour 'draggedObject' pour qu'il soit adjacent à 'targetCube'
			// On suppose que 'draggedObject' se déplace le long de l'axe X pour cet exemple
			const direction = draggedObject.position.x < targetCube.position.x ? 1 : -1; // Déterminer la direction

			// Ajuster uniquement la position de 'draggedObject' pour qu'il s'arrête à la limite de 'targetCube'
			draggedObject.position.x = targetCube.position.x - direction * cubeSize; // Ajuster la position de 'draggedObject'

			// Pour un mouvement dans d'autres directions (y ou z), ajustez la position y ou z de manière similaire
		}
	}

	// Animation loop
	function animate() {
		requestAnimationFrame(animate);
		controls.update(); // Only required if controls.enableDamping or .autoRotate are set to true
		renderer.render(scene, camera);
	}

	onMount(() => {
		initScene(); // Initialize the scene when the component mounts
	});

	onDestroy(() => {
		// Clean up resources and event listeners when the component is destroyed
		if (renderer) renderer.dispose();
		if (controls) controls.dispose();
		if (dragControls) dragControls.dispose();
		if (scene) {
			// Dispose of all scene resources, e.g., geometries, materials
			scene.traverse(function (object) {
				if (object.isMesh) {
					if (object.geometry) object.geometry.dispose();
					if (object.material) {
						if (Array.isArray(object.material)) {
							object.material.forEach((material) => material.dispose());
						} else {
							object.material.dispose();
						}
					}
				}
			});
			scene.dispose();
		}
	});
</script>

<div bind:this={container}></div>

<style>
	div {
		width: 100%;
		height: 100vh;
		display: block;
	}
</style>
