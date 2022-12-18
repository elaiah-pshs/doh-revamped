<script>
	import SearchBar from './SearchBar.svelte';
	import doh_logo from 'images/DOH Logo.png';
	
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<!--
			DOH Logo at the leftmost portion of the navbar
		-->
		<li>
			<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">
				<img src="{doh_logo}" alt="DOH Logo; redirects to the home page">
			</a>
		</li>

		<!--
			Search bar that redirects to the actual DOH website
			(we don't have the ability to actually make this work :sob:)
		-->
		<li>
			<SearchBar {segment}/>
		</li>
			
		<li>
			<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">
				About
			</a>
		</li>

		<li>
			<a aria-current="{segment === 'locations' ? 'page' : undefined}" href="locations">
				Locations
			</a>
		</li>

		<li>
			<a aria-current="{segment === 'programs' ? 'page' : undefined}" href="programs">
				Programs
			</a>
		</li>

		<li>
			<a aria-current="{segment === 'covid_19' ? 'page' : undefined}" href="covid_19">
				COVID-19
			</a>
		</li>

		<li>
			<a aria-current="{segment === 'documents' ? 'page' : undefined}" href="documents">
				Documents
			</a>
		</li>
		

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
	</ul>
</nav>
