<script>
    let query;
    const doh_search = 'https://doh.gov.ph/search/node/';

    function onSubmit(event) {
        event.preventDefault();
        window.open(doh_search + query.value).focus();
    }
</script>

<style>
	form {
        width: 15em;

        display: flex;
        flex-direction: row;
        align-items: center;
    }

    input {
        all: unset;
        height: 100%;
        width: 100%;
        padding: 6px 10px;
    }

    input::-webkit-search-cancel-button {
        -webkit-appearance: none;
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 10px;
        background:
            linear-gradient(45deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 43%,#000 45%,#000 55%,rgba(0,0,0,0) 57%,rgba(0,0,0,0) 100%),
            linear-gradient(135deg, transparent 0%,transparent 43%,#000 45%,#000 55%,transparent 57%,transparent 100%);
    }

    svg {
        color: black;
        fill: currentColor;
        width: 24px;
        height: 24px;
        padding: 10px;
    }

    button {
        all: unset;
        cursor: pointer;
        width: 44px;
        height: 44px;
    }
</style>

<svelte:head>
	<title>Documents</title>
</svelte:head>

<h1>DOH Document Repository</h1>

<p>DOH Document Repository</p>

<form role="search" on:submit|preventDefault={onSubmit}>
	<input type="search" bind:this={query} name="q" placeholder="Search...">
	<button>
		<svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
	</button>
</form>
