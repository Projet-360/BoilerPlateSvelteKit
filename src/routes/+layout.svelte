<script>
  import Header from "./Header.svelte";
  import Cursor from "../components/Cursor/Cursor.svelte";
</script>
<style lang="scss" global>
  @import '../css/main';
</style>

<Cursor/>
<Header />

<main>
  <slot />
</main>
