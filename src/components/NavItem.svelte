<script>
    export let link_to, text, highlighted;
</script>

<style lang="scss">
    .highlighted {
        outline: 1px solid white;
        outline-offset: 0.5em;
    }
</style>

<li>
    {#if highlighted}
        <a class="highlighted" href={link_to}>
            {text}
        </a>
    
    {:else}
        <a href={link_to}>
            {text}
        </a>

    {/if}
</li>
