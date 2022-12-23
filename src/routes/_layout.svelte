<script>
	import Nav from '../components/Nav.svelte';
</script>

<style>
	@font-face {
		font-family: "Rockwell";
		font-style: "normal";
		src: url("../static/ROCK.TTF");
	}

	/* :root {
		font-size: 16px;
		font-family: "lato", sans-serif;
		color: var(--text-primary);
		scroll-behavior: smooth;

		--text-primary-light : rgb();
		--text-primary-dark: rgb(236, 236, 236);
		--text-secondary-light : rgb();
		--text-secondary-dark: rgb(182, 182, 182);
		--bg-primary-light: rgb();
		--bg-primary-dark: rgb();
		--bg-secondary-light: rgb();
		--bg-secondary-dark: rgb();
		--transition-speed-fast: 500ms;
		--transition-speed-medium: 800ms;
		--transition-speed-slow: 1000ms;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: 'Arvo', serif;
	}
	
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	} */
</style>

<Nav />

<main>
	<slot></slot>
</main>