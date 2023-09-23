<script>
  import { onMount } from "svelte";
  import { hoverable } from "$UITools/Cursor/cursorHelpers";
  import { t } from "$UITools/translations/index";
  import Box from "$three/Box.svelte";

  import {
    sendGreeting,
    getAllGreetings,
    deleteGreeting,
  } from "$api/Greetings"; // Import les fonctions

  const link = "https://kit.svelte.dev";

  let editingId = null;
  let name = "";
  let message = "";
  let greetings = [];

  onMount(async () => {
    greetings = await getAllGreetings();
  });

  function prepareUpdate(greeting) {
    name = greeting.name;
    message = greeting.message;
    editingId = greeting._id;
  }

  async function handleSendGreeting() {
    const isSuccessful = await sendGreeting(name, message, editingId);
    if (isSuccessful) {
      name = "";
      message = "";
      editingId = null;
      greetings = await getAllGreetings();
    }
  }

  async function handleDeleteGreeting(id) {
    const isSuccessful = await deleteGreeting(id);
    if (isSuccessful) {
      greetings = await getAllGreetings();
    }
  }
</script>

<svelte:head>
  <title>Page d'exemple</title>
  <meta
    name="description"
    content="Ceci est une description de la page d'exemple."
  />
</svelte:head>

<h1>home</h1>
<a href="/about" use:hoverable={"first"}>Lien vers la page about</a>

<h1>{$t("home.title")}</h1>
<p>{@html $t("home.text", { link })}</p>

<Box />

<form on:submit|preventDefault={handleSendGreeting}>
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
      <button on:click={() => handleDeleteGreeting(greeting._id)}
        >Supprimer</button
      >
    </li>
  {/each}
</ul>
