<script>
  import { hoverable } from '$UITools/Cursor/cursorHelpers.js';
  import Box from '$three/Box.svelte';
  import { t } from '$UITools/translations/index.js';
  import { onMount } from 'svelte';

  const link = 'https://kit.svelte.dev';
  
  let editingId = null;
  let name = '';
  let message = '';
  let greetings = [];

  onMount(() => {
    getAllGreetings();
  });

  function prepareUpdate(greeting) {
    name = greeting.name;
    message = greeting.message;
    editingId = greeting._id;
  }

  async function sendGreeting() {
    const url = editingId ? `http://localhost:3001/api/updateGreeting/${editingId}` : 'http://localhost:3001/api/saveGreeting';
    const method = editingId ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message })
    });
    if (response.ok) {      
      name = '';
      message = '';
      editingId = null;
      getAllGreetings();
    }
  }

  async function getAllGreetings() {
    const response = await fetch('http://localhost:3001/api/getGreetings');
    if (response.ok) {
      greetings = await response.json();
    }
  }

  async function deleteGreeting(id) {
    const response = await fetch(`http://localhost:3001/api/deleteGreeting/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {      
      getAllGreetings();
    }
  }
</script>

<svelte:head>
  <title>Page d'exemple</title>
  <meta name="description" content="Ceci est une description de la page d'exemple.">
</svelte:head>

<h1>
  home
</h1>
<a href="/about" use:hoverable={"first"}>Lien vers la page about</a>

<h1>{$t('home.title')}</h1>
<p>{@html $t('home.text', { link })}</p>

<Box />

<form on:submit|preventDefault={sendGreeting}>
  <label>
    Nom :
    <input type="text" bind:value={name} />
  </label>
  <label>
    Message :
    <input type="text" bind:value={message} />
  </label>
  <button type="submit">Envoyer</button>
</form>

<ul>
  {#each greetings as greeting}
    <li>
      {greeting.name}: {greeting.message}
      <button on:click={() => prepareUpdate(greeting)}>Modifier</button>
      <button on:click={() => deleteGreeting(greeting._id)}>Supprimer</button>
    </li>
  {/each}
</ul>
