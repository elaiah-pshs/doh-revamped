<script>
	import Nav from '../components/Nav.svelte';
</script>

<style>
	@font-face {
		font-family: "Rockwell";
		font-style: "normal";
		src: url("../static/ROCK.TTF");
	}

	main {
		position: relative;
		top: 4em;
	}
</style>

<Nav />

<main>
	<slot></slot>
</main>