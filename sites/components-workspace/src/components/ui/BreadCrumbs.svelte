<script>
    import { page } from '$app/stores';
    import { showQueries } from './stores.js'

    $: pathArray = $page.path.split('/')
    $: nPages = pathArray.length

    function toggleQueries() {
		showQueries.update(value => !value)
	} 
</script>

<div>
    <span class="container"> 
        <span>
        {#if nPages > 2 }
            {#each pathArray as crumb, i}
                {#if i === 0} 
                    <a href="/" ref="prefetch">Home</a>
                {:else if i === nPages-1}
                    &thinsp;
                {:else}
                    &thinsp;&rsaquo;&thinsp;<a href={pathArray.slice(0,i+1).join("/")} ref="prefetch">{decodeURIComponent(crumb.replace("_"," "))} </a>            
                {/if}
            {/each}
        {/if}
    </span>
    <span>
        <!-- {#if $page.path != "/" && $page.path != "/blog" && $page.path != "/faq" && $page.path != "/examples" && $page.path != "/blog/1"} -->
            {#if $showQueries}
            <span class="dev-controls hide" on:click={toggleQueries}>Hide Queries</span>
            {:else}
            <span class="dev-controls show" on:click={toggleQueries}>Show Queries</span>
            {/if}
        <!-- {/if} -->
    </span>
    </span>
</div>

<style>
    div{
        padding: 0.45ch 0 0 0;
        height: 1.5em;
        margin: 1em 0 0 0;

        /* border: 1px solid red; */
    }

    span.container{
        display: flex;
        justify-content: space-between;
    }

    span{
        text-transform:capitalize;
        font-size: small;
        font-family: "SF Compact Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    	-webkit-font-smoothing: antialiased;
    }
    a{
        text-decoration: none;
        color: #3e3e3e;
    }
    a:hover{
        color:black;
    }

    span.dev-controls {
        float: right;
        text-align: center;
        margin: 0 0 0 1.5em; 
        padding: 0.05em 0.25em 0.05em 0.25em;
        border: 1px solid #c0c0c0;
        border-radius: 3px;
        font-size: 0.8em;
        color: #3e3e3e;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -webkit-font-smoothing: antialiased;
        width: 8em;
        transition:box-shadow 350ms;
    }

    span.dev-controls:hover{
        box-shadow: 0 5px 5px 2px hsl(0deg 0% 97%);
        transition:all 350ms;
    }

    span.dev-controls.show{
		background: -webkit-linear-gradient(315deg, #046ade 0%, #08a86d 75%);
        text-decoration: none;
		-webkit-background-clip: text;
        background-clip: text;
  		-webkit-text-fill-color: transparent;
        font-weight: bold;
     }

    @media (max-width: 600px) {
        .dev-controls {
            display:none;
        }
	}

</style>