<script>
	import NavItem from './NavItem.svelte';
	import NavLogo from './NavLogo.svelte';
	import NavThemeSwitcher from './NavThemeSwitcher.svelte';
</script>

<style lang="scss">
	nav {
		font-size: 16px;
		font-family: "Lato", sans-serif;
		font-weight: 200;
		color: #fff;

		background-color: #000;

		width: 100%;

		position: fixed;
		z-index: 1;
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
		<NavLogo />
		<NavItem link_to="about" text="About" />
		<NavItem link_to="locations" text="Locations" />
		<NavItem link_to="programs" text="Programs" />
		<NavItem link_to="covid_19" text="COVID-19" />
		<NavItem link_to="documents" text="Documents" />
		<NavThemeSwitcher />
		<NavItem highlighted link_to="contact" text="Contact Us!" />
		<NavItem link_to="credits" text="Credits" />
	</ul>
</nav>
