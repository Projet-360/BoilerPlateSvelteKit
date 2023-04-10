<script>
 import { updateCursorByName, resetCursor } from '../components/Cursor/CursorHelper'
</script>

<h1>Home</h1>

<div class="box"
on:mouseover={() => updateCursorByName('first')}
on:focus={() => updateCursorByName('first')}
on:mouseout={resetCursor}
on:blur={resetCursor}></div>