<script>
  //https://glitch.com/edit/#!/citrine-agreeable-girdle?path=src%2Fcomponents%2Fapp.html%3A1%3A0
  //https://svelte.dev/repl/a6268cfc4685416998c6e64516546acd?version=3.58.0
  
 // Importe les fonctions 'onMount' et 'onDestroy' de la bibliothèque Svelte
 import { onMount, onDestroy } from 'svelte';
  // Importe la variable 'cursorProps' du store
  import { cursorProps } from '../../store/store';
  // Importe la fonction 'animateCursor' du fichier 'CursorHelper'
  import { animateCursor } from './CursorHelper'
  // Initialise la variable 'Cursor'
  let Cursor;

  // Vérifie si 'window' est défini (exécution côté client)
  if (typeof window !== 'undefined') {
    // Exécute la fonction anonyme lors du montage du composant
    onMount(() => {
      // Récupère l'élément HTML avec l'ID 'Cursor'
      Cursor = document.getElementById('Cursor');
      // Ajoute un gestionnaire d'événements pour le mouvement de la souris
      window.addEventListener('mousemove', animateCursor);
    });

    // Exécute la fonction anonyme lors de la destruction du composant
    onDestroy(() => {
      // Supprime le gestionnaire d'événements pour le mouvement de la souris
      window.removeEventListener('mousemove', animateCursor);
    });
  }
</script>

<style>
  /* Applique des styles à l'élément HTML avec l'ID 'Cursor' */
  #Cursor {
    z-index: 1000;
    width: 50px;
    height: 50px;
    position: fixed;
  }
</style>

<div
  bind:this={Cursor}
  id="Cursor"
  style="transform: 
  translate({$cursorProps.x}px, {$cursorProps.y}px) 
  rotate({$cursorProps.rotation}deg) 
  scale({$cursorProps.scale}); 
  clip-path: {$cursorProps.clipPath}; 
  background-color: {$cursorProps.color}; 

  transition: 
  transform {$cursorProps.transitionDuration}s linear; 
  --background-image: url({$cursorProps.iconInside}); 
  --icon-scale: {$cursorProps.iconScale};"
>
</div>