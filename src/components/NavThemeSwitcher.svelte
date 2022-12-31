<script>
    let body = window.document.body;
    let theme_switcher;

    function switch_theme() {
        // contents = window.document.querySelector("main");
        body.classList.toggle("dark");
        theme_switcher.classList.toggle("dark");
        
        if (theme_switcher.innerHTML == "light_mode") {
            theme_switcher.innerHTML = "dark_mode";
        } else {
            theme_switcher.innerHTML = "light_mode";
        }
    }
</script>

<style lang="scss">
    @use "../styles/global" as g;

    li {
        margin-left: auto;
        display: flex;
	}

    :global(nav button) {
        @include g.lighten();
        padding: 0.25em 0.5em;
        border: 1px solid #FFF;
    }

    :global(nav button.dark) {
        @include g.darken();
    }
</style>

<li>
    <button class="material-symbols-outlined" id="theme-switcher" on:click={switch_theme} bind:this={theme_switcher}>
        light_mode
    </button>
</li>
