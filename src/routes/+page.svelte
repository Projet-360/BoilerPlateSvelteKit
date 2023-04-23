<script>
  import bankPath from '../components/Cursor/bankPath/index'
  import { cursorProps } from '../store/cursorProps';
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



{#each Object.keys(bankPath) as key}
	<button on:mouseover={() => cursorProps.selected = key}>
		{key}
	</button>
{/each}
