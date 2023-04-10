<script>
  import Header from "./Header.svelte";
  import Lerp from "../components/lerp/Lerp.svelte";
</script>
<style lang="scss" global>
  @import '../css/main';
</style>

  <Lerp />
  <Header />

  <main>
    <slot />
  </main>
