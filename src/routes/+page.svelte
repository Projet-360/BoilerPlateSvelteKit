<script>
<<<<<<< HEAD
  import bankPath from '../components/Cursor/bankPath/index'
  import { cursorProps } from '../store/cursorProps';
=======
  import { updateCursorByName, resetCursor } from "../components/Cursor/CursorHelper";
>>>>>>> b6864edd9362423a77a2491db5970e9c5d5d1d19
</script>
<h1>
    home
</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis harum necessitatibus eius iste tempore adipisci dignissimos rem quasi ad, architecto, asperiores maxime vel consequuntur. Quo laborum excepturi libero incidunt dignissimos.</p>


<<<<<<< HEAD

{#each Object.keys(bankPath) as key}
	<button on:mouseover={() => cursorProps.selected = key}>
		{key}
	</button>
{/each}
=======
  <div class="box"
on:mouseover={() => updateCursorByName('first')}
on:focus={() => updateCursorByName('first')}
on:mouseout={resetCursor}
on:blur={resetCursor}></div>
>>>>>>> b6864edd9362423a77a2491db5970e9c5d5d1d19
