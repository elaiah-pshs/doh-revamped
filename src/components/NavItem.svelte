<script>
    export let link_to, text;
	export let icon, src, alt;
    export let highlight;
</script>

<style>
    li {
		text-align: center;
        margin-right: 1em;
	}

    li:nth-child(7) {
		margin-left: auto;
	}

    .highlight {
        outline: 1px solid white;
        outline-offset: 0.5em;
    }

	a {
		text-decoration: none;
		margin: 1em 0.5em;
		display: flex;
	}

    img {
        width: 2em;
        height: 2em;
    }
</style>

<li>
    {#if icon == true}
        <a href=".">
            <img src={src} alt={alt}>
        </a>

    {:else if highlight == true}
        <a class="highlight" href={link_to}>
            {text}
        </a>

    {:else}
        <a href={link_to}>
            {text}
        </a>

    {/if}
</li>
    
