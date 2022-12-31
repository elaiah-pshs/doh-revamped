<script>
    export let link_to, text, highlighted;
</script>

<style lang="scss">
    .highlighted {
        border: 1px solid white;
        margin: 0;
        padding: 0.375em 0.5em;

        display: flex;
        align-items: center;
        justify-content: center;
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
