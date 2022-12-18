<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	/* @import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');

	:root {
		font-size: 16px;
		font-family: "Arvo";
		color: var(--text-primary);
		scroll-behavior: smooth;

		--text-primary: rgb(236, 236, 236);
		--text-secondary: rgb(182, 182, 182);
		--text-gradient: linear-gradient(90deg, #26AFD9, #094978);
		--bg-primary: rgb(6, 50, 81);
		--bg-secondary: rgb(9, 73, 120);
		--transition-speed: 500ms;
	} */
	
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>