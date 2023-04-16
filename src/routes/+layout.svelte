<script>
  import Header from "./Header.svelte";
  import Cursor from "../components/Cursor/Cursor.svelte";
  import SmoothScroller from "../components/SmoothScroller/SmoothScroller.svelte";
</script>

<style lang="scss" global>
  @import '../css/main';
</style>

<Cursor/>
<SmoothScroller>
  <main>
    <slot />
  </main>
</SmoothScroller>