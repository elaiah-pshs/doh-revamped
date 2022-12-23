<script>
	import NavItem from './NavItem.svelte';
	import doh_logo from 'images/DOH Logo.png';
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

	nav {
		font-size: 16px;
		font-family: "Lato", sans-serif;
		font-weight: 200;
		color: white;

		background-color: rgba(0,0,0,0.5);

		width: 100%;

		position: fixed;
		z-index: 1;

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

	ul {
		list-style: none;

		width: 100%;
		max-width: 1280px;
		margin: 0 auto;
		padding: 0;

		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>

<nav>
	<ul>
		<NavItem icon src="{doh_logo}" alt="DOH Logo; redirects to the home page" />
		<NavItem link_to="about" text="About" />
		<NavItem link_to="locations" text="Locations" />
		<NavItem link_to="programs" text="Programs" />
		<NavItem link_to="covid_19" text="COVID-19" />
		<NavItem link_to="documents" text="Documents" />
		<NavItem highlight link_to="contact" text="Contact Us!" />
		<NavItem link_to="credits" text="Credits" />
	</ul>
</nav>
