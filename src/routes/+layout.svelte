<script>
  import Header from "./Header.svelte";
  import Cursor from "../components/Cursor/index.svelte";
  import Preloader from "../components/Preloader/index.svelte";
  import SmoothScroller from "../components/SmoothScroller/index.svelte";
</script>

<style lang="scss" global>
  @import '../css/main';
</style>
<Preloader/>
<Cursor/>
<SmoothScroller>
  <main>
    <slot />
  </main>
</SmoothScroller>