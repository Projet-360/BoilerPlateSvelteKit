<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Importer GLTFLoader
	import Stats from 'stats.js'; // Importer stats.js

	let container: HTMLDivElement | null; // Assumant que container est un élément div dans votre DOM

	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
	let renderer: THREE.WebGLRenderer;
	let controls: any;
	let dragControls: any;
	let cubes: THREE.Mesh[] = [];
	let draggableModels: THREE.Object3D[] = []; // Initialisation de draggableModels comme tableau vide
	let staticModels: THREE.Object3D[] = []; // Initialisation de staticModels si nécessaire
	let stats: Stats; // Déclaration de l'instance stats

	const modelPaths = [{ path: '/model/car.gltf', draggable: true }];

	let raycaster = new THREE.Raycaster();
	let mouse = new THREE.Vector2();

	let plane,
		walls = [];
	const planeSize = 10;
	const wallHeight = 3;
	const wallWidth = 0.1;

	onMount(() => {
		stats = new Stats(); // Initialisation de stats
		stats.showPanel(0); // Panel 0 = fps
		document.body.appendChild(stats.dom); // Ajouter le panneau stats au DOM

		initScene();
		animate();
	});

	onDestroy(() => {
		cleanup();
	});

	function initModels() {
		const loader = new GLTFLoader();

		modelPaths.forEach((model) => {
			loader.load(
				model.path,
				(gltf) => {
					const sceneModel = gltf.scene;
					sceneModel.castShadow = true;
					sceneModel.position.y = 0; // Ajustement selon la hauteur du modèle

					if (model.path.includes('car.gltf')) {
						// Ajustez ces valeurs selon la position souhaitée
						sceneModel.position.set(0, 0.28, 1);
						sceneModel.rotateY(1.55);
						sceneModel.scale.set(2.2, 2.2, 2.2);

						sceneModel.traverse((child) => {
							if (child.isMesh) {
								child.castShadow = true;
								// Utiliser MeshStandardMaterial pour un rendu plus réaliste
								const material = new THREE.MeshStandardMaterial({
									color: 0x000000, // Couleur noire
									roughness: 1, // Augmenter la rugosité pour un aspect moins brillant
									metalness: 0 // Matériau non métallique pour un aspect tissu
								});

								// Appliquer la nouvelle matière
								child.material = material;
							}
						});
					}

					// Ajouter le modèle au bon groupe
					if (model.draggable) {
						scene.add(sceneModel);
						draggableModels.push(sceneModel);
					} else {
						scene.add(sceneModel);
						staticModels.push(sceneModel);
					}
				},
				undefined,
				(error) => console.error('An error happened', error)
			);
		});
	}

	function initScene() {
		scene = new THREE.Scene();
		setupCamera();
		renderer = new THREE.WebGLRenderer({ antialias: true });
		configureRenderer();

		controls = new OrbitControls(camera, renderer.domElement);

		controls.enableDamping = true; // Active l'amortissement
		controls.dampingFactor = 0.2;

		addObjectsToScene();
		//initDragControls();
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
		addSquaresAlongWalls();
		initModels();
	}

	function initLights() {
		const ambientLight = new THREE.AmbientLight(0xfbffe2, 0.1);
		scene.add(ambientLight);

		const spotLight = new THREE.SpotLight(0xffffff, 60);
		spotLight.position.set(-2, 5, -2);
		spotLight.castShadow = true;
		scene.add(spotLight);
	}

	function initGround() {
		const textureLoader = new THREE.TextureLoader();
		const signageGeometry = new THREE.PlaneGeometry(2, 1); // Largeur et hauteur du rectangle de signalétique

		// Modifier ici pour la couleur rouge et activer la transparence
		const signageMaterial = new THREE.MeshBasicMaterial({
			color: 0xff7500, // Couleur rouge
			transparent: true, // Activer la transparence
			opacity: 0.2 // Régler l'opacité à 0.2
		});

		const signage = new THREE.Mesh(signageGeometry, signageMaterial);
		signage.position.set(0, 0.348, 1); // Ajustez x, y, z à l'endroit où vous voulez que la signalétique apparaisse
		signage.rotation.x = -Math.PI / 2; // Oriente la signalétique parallèlement au sol
		signage.scale.set(2.35, 4, 2.35); // Ajustez l'échelle si nécessaire
		scene.add(signage);

		// Charger la texture de base
		const groundTexture = textureLoader.load('src/dalle/dalle.png');

		// Charger le normal map
		const groundNormalMap = textureLoader.load('src/dalle/NormalMap.png');

		// Charger l'ambient occlusion map
		const ambientOcclusionMap = textureLoader.load('src/dalle/AmbientOcclusionMap.png');

		// Charger le displacement map (nécessite une géométrie avec plus de détails pour être efficace)
		const displacementMap = textureLoader.load('src/dalle/DisplacementMap.png');

		// Charger le specular map (utilisé avec MeshPhongMaterial)
		const specularMap = textureLoader.load('src/dalle/SpecularMap.png');

		// S'assurer que toutes les textures sont répétées de manière uniforme
		[groundTexture, groundNormalMap, ambientOcclusionMap, displacementMap, specularMap].forEach(
			(texture) => {
				texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
				texture.repeat.set(40, 40); // Ajustez selon la taille de votre sol
			}
		);

		const geometry = new THREE.PlaneGeometry(planeSize, planeSize);

		// Utiliser MeshStandardMaterial ou MeshPhongMaterial selon vos besoins
		const material = new THREE.MeshStandardMaterial({
			map: groundTexture,
			normalMap: groundNormalMap,
			aoMap: ambientOcclusionMap,
			displacementMap: displacementMap,
			// displacementScale: 0.1, // Ajustez cette valeur selon l'effet désiré
			// specularMap: specularMap, // Specular map est utilisé avec MeshPhongMaterial
			side: THREE.DoubleSide
		});

		plane = new THREE.Mesh(geometry, material);
		plane.rotation.x = -Math.PI / 2;
		plane.receiveShadow = true;
		scene.add(plane);
	}

	function initWalls() {
		const loader = new THREE.TextureLoader();

		// Charger la texture de béton
		const concreteTexture = loader.load('/src/beton/beton.jpeg', (texture) => {
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set(2, 2); // Ajustez les valeurs de répétition selon la taille de vos murs et l'aspect désiré
		});

		const positions = [
			{ x: -planeSize / 2, z: 0, display: 'transparent' }, // Left wall
			{ x: planeSize / 2, z: 0, display: 'visible' }, // Right wall
			{ z: -planeSize / 2, x: 0, display: 'transparent' }, // Back wall
			{ z: planeSize / 2, x: 0, display: 'visible' } // Front wall
		];

		positions.forEach((pos, index) => {
			const geometry =
				index < 2
					? new THREE.BoxGeometry(wallWidth, wallHeight, planeSize)
					: new THREE.BoxGeometry(planeSize, wallHeight, wallWidth);

			// Créer le matériau avec la texture de béton
			const material = new THREE.MeshStandardMaterial({ map: concreteTexture });

			// Appliquer la transparence si nécessaire
			if (pos.display === 'transparent') {
				material.transparent = true;
				material.opacity = 0; // Ajustez selon le degré de transparence désiré
			}

			const wall = new THREE.Mesh(geometry, material);
			wall.position.set(pos.x, wallHeight / 2, pos.z);
			wall.castShadow = true;
			wall.receiveShadow = true;
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
				height: 3,
				depth: 1
			},
			{
				width: 1,
				height: 3,
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
			cube.position.y = height / 2 + 0.3; // Ajustement pour placer la base du cube sur le plan
			cube.position.x = 4.45;
			console.log(i);

			cube.position.z = i === 1 ? 4.45 : 3.45;
			scene.add(cube);
			return cube;
		});
	}

	function addSquaresAlongWalls() {
		const squareSize = 1; // Chaque carré a une taille de 1x1
		const halfPlaneSize = planeSize / 2; // La moitié de la taille du sol pour le positionnement

		// Créer des carrés le long du côté gauche
		for (let z = -halfPlaneSize; z < halfPlaneSize; z += squareSize) {
			addSquare(-halfPlaneSize, z);
		}

		// Créer des carrés le long du côté droit
		for (let z = -halfPlaneSize; z < halfPlaneSize; z += squareSize) {
			addSquare(halfPlaneSize - squareSize, z);
		}

		// Créer des carrés le long du côté arrière
		for (let x = -halfPlaneSize; x < halfPlaneSize; x += squareSize) {
			addSquare(x, -halfPlaneSize);
		}

		// Créer des carrés le long du côté avant
		for (let x = -halfPlaneSize; x < halfPlaneSize; x += squareSize) {
			addSquare(x, halfPlaneSize - squareSize);
		}
	}

	// Fonction pour ajouter un carré à la scène à une position spécifiée
	function addSquare(x: number, z: number) {
		const squareSize = 1; // Définit la taille des carrés pleins
		// Utilisez PlaneGeometry pour des carrés pleins
		const squareGeometry = new THREE.PlaneGeometry(squareSize, squareSize);
		const squareMaterial = new THREE.MeshStandardMaterial({ color: 0x4caf50 }); // Couleur des carrés
		const squareMesh = new THREE.Mesh(squareGeometry, squareMaterial);
		squareMesh.position.set(x + squareSize / 2, 0.5, z + squareSize / 2); // Positionnez légèrement au-dessus du sol pour éviter le z-fighting
		squareMesh.rotation.x = -Math.PI / 2; // Orientez les carrés pour qu'ils soient parallèles au sol
		squareMesh.receiveShadow = true; // Permet aux carrés de recevoir des ombres
		scene.add(squareMesh);
	}

	function animate() {
		stats.begin();
		stats.end();
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
