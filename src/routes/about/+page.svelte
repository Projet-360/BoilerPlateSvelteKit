<script>
	import { t } from '$UITools/translations/index.js';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<h1>{$t('about.title')}</h1>
	<p>{@html $t('about.text')}</p>
	<a href="/">{$t('about.link')}</a>
</div>
