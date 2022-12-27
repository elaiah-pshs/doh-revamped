<script>
    function light_mode() {
        window.document.querySelector("main").classList.replace("dark", "light");
    }

    function dark_mode() {
        window.document.querySelector("main").class = "dark";
    }
</script>

<style lang="scss">
    li {
        margin-left: auto;
        display: flex;
	}

    button {
        padding: 0.25em 0.5em;
        border: none;
    }

    .light {
        color: black;
        background-color: white;
    }
</style>

<li>
    <button class="material-symbols-outlined light" on:click{light_mode()}>
        light_mode
    </button>
    <button class="material-symbols-outlined dark" on:click{dark_mode()}>
        dark_mode
    </button>
</li>
