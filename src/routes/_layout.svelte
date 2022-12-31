<script>
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';
</script>

<style lang="scss" global>
	@use "../styles/global" as g;
</style>

<Nav />

<Header />

<main>
	<slot></slot>
</main>