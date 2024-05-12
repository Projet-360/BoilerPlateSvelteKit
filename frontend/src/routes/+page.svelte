<script lang="ts">
  import { Canvas } from '@threlte/core'
  import { onDestroy, onMount } from 'svelte'
  import { hoverable } from '$UITools/Cursor/cursorHelpers'
  import { t } from '$UITools/Translations/index'
  import Box from '$three/Box.svelte'
  import gsap from 'gsap'

  import Greetings from '$components/Greetings.svelte'
  import Slider from '$components/Slider.svelte'
  import { setTransitionLoader } from '$stores/UX/transitionLoaderStore'
  import { fetchMockData } from '$lib/utils/mockService'
  import { enter, exit } from './transition'
  import { isAnimatingOut } from '$stores/UX/isAnimating'
  import { onNavigate } from '$app/navigation'

  const linkUrl: string = 'https://kit.svelte.dev'
  let title: HTMLElement
  let text: HTMLElement
  let link: HTMLElement
  let path: string

  onNavigate((navigation) => {
    path = navigation.to?.route.id
  })

  onMount(() => {
    setTransitionLoader(false)
    fetchMockData
  })
</script>

<svelte:head>
  <title>Page d'exemple</title>
  <meta
    name="description"
    content="Ceci est une description de la page d'exemple."
  />
</svelte:head>

<div
  class="home"
  in:enter="{{ duration: 1, title, text, link }}"
  out:exit="{{ duration: 1, title, text, link }}"
>
  <h1 bind:this="{title}">{$t('data.home-title')}</h1>
  <p bind:this="{text}">{@html $t('data.home-text', { linkUrl })}</p>
  <div class="linkhome" bind:this="{link}">
    <a href="/about" use:hoverable="{'first'}">{$t('data.home-link')}</a>
  </div>

  <Greetings />
  <Slider />
  <Box />
</div>

<style>
  .home {
    width: 100vw;
    position: absolute;
    background-color: rgb(150, 150, 150);
  }
</style>
