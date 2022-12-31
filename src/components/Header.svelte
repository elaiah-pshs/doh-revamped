<script>
	import doh_logo from 'images/DOH Logo.png';
</script>

<style lang="scss">
	@use "sass:color";
	@use "../styles/global" as g;

	heading {
		color: white;

		background: url("https://www.bworldonline.com/wp-content/uploads/2022/06/DOH.jpg") no-repeat center center;
    	background-size: cover;
		height: calc(100vh - 4em);
		
		display: flex;
		align-items: center;
		justify-content: center;

		position: relative;
		top: 4em;
	}

	.background_tint {
		background-color: transparentize(g.$surface-dark, 0.5);
  		background-blend-mode: multiply;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 3em 0 0;
	}

	section {
		max-width: 50em;
	}

	h1 {
		color: lighten(g.$primary, 45%);
		font-family: Rockwell;
		font-size: 8em;
		font-weight: 300;
		margin: 0;
	}

	h4 {
		color: lighten(g.$primary, 45%);
		font-size: 3em;
		font-weight: 300;
		margin: 0;
	}
</style>

<heading class="background_tint">
	<img src={doh_logo} alt="DOH logo">
	<section>
		<h4>Republic of the Philippines</h4>
		<h1>Department of Health</h1>
		<h4>Kagawaran ng Kalusugan</h4>
	</section>
</heading>
