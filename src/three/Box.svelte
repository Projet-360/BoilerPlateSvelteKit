<script>
  import { onMount, onDestroy } from "svelte";
  import * as THREE from "three";

  let container;
  let animationFrameId;

  onMount(() => {
    const cubeSize = 400; // Taille du cube en pixels
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio mis à 1

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true pour un fond transparent
    renderer.setClearColor(0x000000, 0); // Fond transparent
    renderer.setSize(cubeSize, cubeSize);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.scale.set(3.5, 3.5, 3.5);

    scene.add(cube);
    camera.position.z = 5;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      // Nettoyez ici les ressources Three.js
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
    };
  });

  onDestroy(() => {
    // Nettoyez ici les ressources supplémentaires si nécessaire
  });
</script>

<div bind:this={container} />

<style>
  /* Ajuster la taille du conteneur pour qu'il corresponde à la taille du cube */
  div {
    width: 400px;
    height: 400px;
  }
</style>
