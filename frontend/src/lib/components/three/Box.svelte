<script>
	import { onMount, onDestroy } from 'svelte';
	import { threeStore } from '$stores/threeStore';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { DragControls } from 'three/examples/jsm/controls/DragControls.js';

	let container; // DOM element to bind the renderer
	let scene, camera, renderer; // Three.js essentials
	let controls, dragControls; // Controls for the scene
	let cube1, cube2, plane; // The cubes to be dragged and dropped

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
		initGround();

		// Add drag controls
		initDragControls();

		// Animation loop
		animate();
	}

	function initGround() {
		const geometry = new THREE.PlaneGeometry(10, 10); // Taille du sol
		const material = new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
		plane = new THREE.Mesh(geometry, material);
		plane.rotation.x = -Math.PI / 2; // Rotation pour que le plan soit horizontal
		plane.position.y = -0.5; // Positionnement légèrement en dessous des cubes pour commencer
		scene.add(plane);
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
		const targetCube = draggedObject === cube1 ? cube2 : cube1; // Déterminer l'autre cube
		const distanceToCube = draggedObject.position.distanceTo(targetCube.position);
		const distanceToFloor = Math.abs(draggedObject.position.y + 0.5); // Si la base du cube est à y = 0

		const cubeSize = 1; // Taille des cubes
		const magneticThreshold = 1.5; // Seuil de l'effet magnétique

		// Aimantation par rapport à l'autre cube
		if (distanceToCube < magneticThreshold) {
			const direction = draggedObject.position.x < targetCube.position.x ? 1 : -1;
			draggedObject.position.x = targetCube.position.x - direction * cubeSize;
		}

		// Aimantation par rapport au sol
		if (distanceToFloor < magneticThreshold / 2) {
			// Seuil ajusté pour le sol
			draggedObject.position.y = -0.5 + cubeSize / 2; // Ajuster pour que le cube "colle" au sol
		}

		draggedObject.position.y = -0.5 + cubeSize / 2;
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
