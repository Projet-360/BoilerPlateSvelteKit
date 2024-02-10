<script>
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
	import { PointLightHelper } from 'three';

	const wallHeight = 3; // Hauteur des murs
	const wallWidth = 0.1; // Épaisseur des murs
	const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 }); // Matériau des murs

	let container; // DOM element to bind the renderer
	let scene, camera, renderer; // Three.js essentials
	let controls, dragControls; // Controls for the scene
	let cube1, cube2, plane; // The cubes to be dragged and dropped
	let light;
	let planeSize = 15; // La taille de votre plane, assurez-vous que cette valeur correspond à celle utilisée dans initGround

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
		renderer.shadowMap.enabled = true;
		container.appendChild(renderer.domElement);

		// Add orbit controls
		controls = new OrbitControls(camera, renderer.domElement);

		camera.position.set(0, 0, 5);

		// Initialize and add cubes to the scene
		initCubes();
		initGround();
		initWalls();
		initLights();

		// Add drag controls
		initDragControls();

		// Animation loop
		animate();
	}

	function initGround() {
		const geometry = new THREE.PlaneGeometry(planeSize, planeSize); // Taille du sol
		const material = new THREE.MeshStandardMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
		plane = new THREE.Mesh(geometry, material);
		plane.rotation.x = -Math.PI / 2; // Rotation pour que le plan soit horizontal
		plane.position.y = -0.5; // Positionnement légèrement en dessous des cubes pour commencer
		plane.receiveShadow = true;
		scene.add(plane);
	}

	function initWalls() {
		// Mur de gauche
		const leftWallGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, planeSize);
		const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
		leftWall.position.set(-planeSize / 2, wallHeight / 2, 0); // Position à l'extrémité gauche du plane
		leftWall.position.y = 0.5; // Positionnement légèrement en dessous des cubes pour commencer
		leftWall.receiveShadow = true;
		scene.add(leftWall);

		// Mur du fond
		const backWallGeometry = new THREE.BoxGeometry(planeSize, wallHeight, wallWidth);
		const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);

		backWall.position.set(0, wallHeight / 2, -planeSize / 2); // Position à l'extrémité arrière du plane
		backWall.rotation.y = Math.PI / 1; // Rotation de 90 degrés pour le mettre perpendiculaire au mur de gauche
		backWall.position.y = 0.5; // Positionnement légèrement en dessous des cubes pour commencer

		backWall.receiveShadow = true;
		scene.add(backWall);
	}

	function initLights() {
		//Create a SpotLight and turn on shadows for the light
		light = new THREE.PointLight(0xfbffe2, 15, 10);
		light.position.set(-4, 2, -4);

		let light2 = new THREE.PointLight(0xfbffe2, 15, 10);
		light2.position.set(-4, 2, 0);

		let light3 = new THREE.PointLight(0xfbffe2, 15, 10);
		light3.position.set(0, 2, -4);

		light.castShadow = true; // default false

		scene.add(light);
		scene.add(light2);
		scene.add(light3);

		light.shadow.mapSize.width = 512; // default
		light.shadow.mapSize.height = 512; // default
		light.shadow.camera.near = 0.5; // default
		light.shadow.camera.far = 500; // default

		const sphereSize = 1;

		const pointLightHelper = new THREE.PointLightHelper(light, sphereSize);
		scene.add(pointLightHelper);
		const pointLightHelper2 = new THREE.PointLightHelper(light2, sphereSize);
		scene.add(pointLightHelper2);
		const pointLightHelper3 = new THREE.PointLightHelper(light3, sphereSize);
		scene.add(pointLightHelper3);
	}

	// Initialize cubes
	function initCubes() {
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const geometryRec = new THREE.BoxGeometry(1, 2, 1);
		const material1 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
		const material2 = new THREE.MeshStandardMaterial({ color: 0xff0000 });

		cube1 = new THREE.Mesh(geometry, material1);
		cube2 = new THREE.Mesh(geometryRec, material2);

		cube1.castShadow = true;
		cube2.castShadow = true;

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
		const cubeSize = 1; // Supposons que la taille des cubes est 1 unité.
		const magneticThreshold = 2 * cubeSize;

		const targetCube = draggedObject === cube1 ? cube2 : cube1; // Détermine l'autre cube.
		let direction, newPos;

		// Calcul de la distance et direction par rapport à l'autre cube
		if (
			Math.abs(draggedObject.position.x - targetCube.position.x) < magneticThreshold &&
			Math.abs(draggedObject.position.z - targetCube.position.z) < magneticThreshold
		) {
			direction = draggedObject.position.x < targetCube.position.x ? -1 : 1;
			newPos = targetCube.position.x + direction * cubeSize;
			if (Math.abs(newPos) <= planeSize / 2 - cubeSize / 2) {
				// Vérifie si le nouveau positionnement est dans les limites du plane
				draggedObject.position.x = newPos;
			}

			direction = draggedObject.position.z < targetCube.position.z ? -1 : 1;
			newPos = targetCube.position.z + direction * cubeSize;
			if (Math.abs(newPos) <= planeSize / 2 - cubeSize / 2) {
				// Vérifie si le nouveau positionnement est dans les limites du plane
				draggedObject.position.z = newPos;
			}
		}

		// Fixation au sol
		draggedObject.position.y = plane.position.y + cubeSize / 2;

		// Vérification de la proximité avec les murs et ajustement
		// Mur de gauche
		if (draggedObject.position.x - cubeSize / 2 < -planeSize / 2) {
			draggedObject.position.x = -planeSize / 2 + cubeSize / 2;
		}

		// Mur du fond
		if (draggedObject.position.z - cubeSize / 2 < -planeSize / 2) {
			draggedObject.position.z = -planeSize / 2 + cubeSize / 2;
		}

		// Mur de droite
		if (draggedObject.position.x + cubeSize / 2 > planeSize / 2) {
			draggedObject.position.x = planeSize / 2 - cubeSize / 2;
		}

		// Mur de devant
		if (draggedObject.position.z + cubeSize / 2 > planeSize / 2) {
			draggedObject.position.z = planeSize / 2 - cubeSize / 2;
		}
	}

	// Animation loop
	function animate() {
		requestAnimationFrame(animate);
		controls.update(); // Mise à jour des contrôles de la caméra si nécessaire
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
			//scene.dispose();
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
