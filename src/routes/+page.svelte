<script>
  import { hoverable } from '$UITools/Cursor/cursorHelpers.js'
  import Box from '$three/Box.svelte';
  import { t } from '$UITools/translations/index.js';

  const link = 'https://kit.svelte.dev';

  let name = '';
  let message = '';

  async function sendGreeting() {
    const response = await fetch('http://localhost:3001/api/saveGreeting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message })
    });
    if (response.ok) {
      alert('Salutation enregistrée !');
    }
  }

  let greetings = [];

  async function getGreetings() {
    const response = await fetch('http://localhost:3001/api/getGreetings');
    if (response.ok) {
      greetings = await response.json();
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

<Box/>

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

<button on:click={getGreetings}>Récupérer les salutations</button>
<ul>
  {#each greetings as greeting}
    <li>{greeting.name}: {greeting.message}</li>
  {/each}
</ul>