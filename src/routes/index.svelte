<script>
	import doh_logo from 'images/DOH Logo.png';
	import successkid from 'images/successkid.jpg';
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

	heading {
		color: white;
		font-family: "Lato", sans-serif;
		font-weight: 300;

		background: url("https://www.bworldonline.com/wp-content/uploads/2022/06/DOH.jpg") no-repeat center center;
    	background-size: cover;
		height: calc(100vh - 4em);
		
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.background_tint {
		background-color: rgba(0,0,0,.5);
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
		font-family: Rockwell;
		font-size: 8em;
		margin: 0;
	}

	h4 {
		font-size: 3em;
		margin: 0;
	}
</style>

<svelte:head>
	<title>Department of Health</title>
</svelte:head>

<heading class="background_tint">
	<img src={doh_logo} alt="DOH logo">
	<section>
		<h4>Republic of the Philippines</h4>
		<h1>Department of Health</h1>
		<h4>Kagawaran ng Kalusugan</h4>
	</section>
	
</heading>

<h1>Great success!</h1>

<figure>
	<img alt="Success Kid" src="{successkid}">
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
