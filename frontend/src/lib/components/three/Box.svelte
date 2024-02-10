<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { DragControls } from 'three/examples/jsm/controls/DragControls.js';

	let container: HTMLDivElement | null; // Assumant que container est un élément div dans votre DOM

	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera | THREE.OrthographicCamera; // Dépend de la caméra que vous utilisez
	let renderer: THREE.WebGLRenderer;
	let controls: any;
	let dragControls: any;
	let cubes: THREE.Mesh[] = [];

	let plane,
		walls = [];
	const planeSize = 15;
	const cubeSize = 1; // Définir une constante pour la taille des cubes
	const wallHeight = 3;
	const wallWidth = 0.1;
	const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 }); // Matériau des murs

	onMount(() => {
		initScene();
		animate();
	});

	onDestroy(() => {
		cleanup();
	});

	function initScene() {
		scene = new THREE.Scene();
		setupCamera();
		renderer = new THREE.WebGLRenderer({ antialias: true });
		configureRenderer();

		controls = new OrbitControls(camera, renderer.domElement);

		controls.enableDamping = true; // Active l'amortissement
		controls.dampingFactor = 0.5;

		addObjectsToScene();
		initDragControls();
	}

	function setupCamera() {
		camera = new THREE.PerspectiveCamera(
			75, // Angle de vue
			container.clientWidth / container.clientHeight, // Rapport d'aspect
			0.1, // Plan rapproché
			1000 // Plan éloigné
		);

		// Positionnement de la caméra pour une vue avec rotation horizontale
		const radius = 5; // Distance de la caméra au point central de la scène
		const horizontalAngleInRadians = 220 * (Math.PI / 180); // Conversion de 50 degrés en radians

		camera.position.x = radius * Math.cos(horizontalAngleInRadians);
		camera.position.y = 2; // Hauteur de la caméra
		camera.position.z = radius * Math.sin(horizontalAngleInRadians);

		camera.lookAt(scene.position); // Oriente la caméra vers le centre de la scène
	}

	function configureRenderer() {
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.shadowMap.enabled = true;
		container.appendChild(renderer.domElement);
	}

	function addObjectsToScene() {
		initLights();
		initGround();
		initWalls();
		initCubes();
	}

	function initLights() {
		const ambientLight = new THREE.AmbientLight(0xfbffe2, 0.2);
		scene.add(ambientLight);

		const spotLight = new THREE.SpotLight(0xffffff, 20);
		spotLight.position.set(-2, 3, -2);
		spotLight.castShadow = true;
		scene.add(spotLight);
	}

	function initGround() {
		const geometry = new THREE.PlaneGeometry(planeSize, planeSize);
		const material = new THREE.MeshStandardMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
		plane = new THREE.Mesh(geometry, material);
		plane.rotation.x = -Math.PI / 2;
		plane.receiveShadow = true;
		scene.add(plane);
	}

	function initWalls() {
		const positions = [
			{ x: -planeSize / 2, z: 0 }, // Left wall
			{ x: planeSize / 2, z: 0 }, // Right wall
			{ z: -planeSize / 2, x: 0 }, // Back wall
			{ z: planeSize / 2, x: 0 } // Front wall
		];

		positions.forEach((pos, index) => {
			const geometry =
				index < 2
					? new THREE.BoxGeometry(wallWidth, wallHeight, planeSize)
					: new THREE.BoxGeometry(planeSize, wallHeight, wallWidth);
			const wall = new THREE.Mesh(geometry, wallMaterial);
			wall.position.set(pos.x, wallHeight / 2, pos.z);
			wall.castShadow = true;
			wall.receiveShadow = true;
			walls.push(wall);
			scene.add(wall);
		});
	}

	function initCubes() {
		const materials = [
			new THREE.MeshStandardMaterial({ color: 0x00ff00 }),
			new THREE.MeshStandardMaterial({ color: 0xff0000 })
		];

		const materialsgeometry = [
			{
				width: 1,
				height: 1,
				depth: 1
			},
			{
				width: 1,
				height: 2,
				depth: 1
			}
		];

		// Assurez-vous que la longueur de materialsgeometry correspond à celle de votre tableau materials
		cubes = materialsgeometry.map((geom, i) => {
			// Utilisation de la déstructuration pour extraire les dimensions
			const { width, height, depth } = geom;
			const geometry = new THREE.BoxGeometry(width, height, depth);
			const cube = new THREE.Mesh(geometry, materials[i % materials.length]); // Utilisation du modulo pour boucler sur le tableau materials si nécessaire
			cube.castShadow = true;
			cube.userData.height = height; // Stockage de la hauteur dans userData
			cube.position.y = height / 2; // Ajustement pour placer la base du cube sur le plan
			cube.position.x = 7;
			cube.position.z = i === 1 ? 3 : 1;
			scene.add(cube);
			return cube;
		});
	}

	function initDragControls() {
		dragControls = new DragControls(cubes, camera, renderer.domElement);
		dragControls.addEventListener('dragstart', () => (controls.enabled = false));
		dragControls.addEventListener('dragend', () => (controls.enabled = true));
		dragControls.addEventListener('drag', (event) => checkMagneticEffect(event.object));
	}

	function checkMagneticEffect(draggedObject) {
		const magneticThreshold = 2 * cubeSize;
		const targetCube = draggedObject === cubes[0] ? cubes[1] : cubes[0];
		let direction, newPos;

		if (
			Math.abs(draggedObject.position.x - targetCube.position.x) < magneticThreshold &&
			Math.abs(draggedObject.position.z - targetCube.position.z) < magneticThreshold
		) {
			['x', 'z'].forEach((axis) => {
				direction = draggedObject.position[axis] < targetCube.position[axis] ? -1 : 1;
				newPos = targetCube.position[axis] + direction * cubeSize;
				if (Math.abs(newPos) <= planeSize / 2 - cubeSize / 2) {
					draggedObject.position[axis] = newPos;
				}
			});
		}

		draggedObject.position.y = draggedObject.userData.height / 2; // Fixation au sol

		// Vérification de la proximité avec les murs et ajustement
		['x', 'z'].forEach((axis) => {
			if (draggedObject.position[axis] - cubeSize / 2 < -planeSize / 2) {
				draggedObject.position[axis] = -planeSize / 2 + cubeSize / 2;
			}
			if (draggedObject.position[axis] + cubeSize / 2 > planeSize / 2) {
				draggedObject.position[axis] = planeSize / 2 - cubeSize / 2;
			}
		});
	}

	function animate() {
		requestAnimationFrame(animate);
		controls.update();
		renderer.render(scene, camera);
	}

	function cleanup() {
		if (renderer) renderer.dispose();
		if (controls) controls.dispose();
		if (dragControls) dragControls.dispose();
		if (scene) {
			// Vérifie si `scene` est définie avant d'appeler `traverse`
			scene.traverse((object) => {
				if (object.isMesh) {
					object.geometry.dispose();
					if (Array.isArray(object.material)) {
						object.material.forEach((material) => material.dispose());
					} else {
						object.material.dispose();
					}
				}
			});
		}
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
