<script>
    export let nibling;
    export let onShowLove;
    export let piblingName;
    export let onEatCookie;

    import { refrigeratorMessages } from "../../store/refrigeratorMessage"; 

    let fridgeMessage = "";

    function handleWriteFridgeMessage () {
        fridgeMessages.update(())
    }
  </script>


<div class:is-girl={nibling.isGirl} 
        class:is-boy={!nibling.isGirl} 
        class={nibling.blackSheep || "not-a-black-sheep"} >
{#if nibling.isGirl}
    <p>Niece: {nibling.name}</p>
    {:else}
    <p>Nephew {nibling.name}</p>
    {/if}

</div>

<button on:click={ () => onShowLove(`Hey ${piblingName}. It's me ${nibling.name} and I love you.`)}>Show Love</button>

<button on:click={onEatCookie}>Eat a cookie</button>

<p>There are {$refrigeratorMessages.length} on the fridge</p>
<input>
<button>Write a message on the fridge</button>

<style>
    .is-girl{
        border: 3px solid blue;
    }

    .is-boy {
        border: 3px solid pink;
    }

    .not-a-black-sheep {
        background-color: aliceblue;
        color: black;
    }

    .medium-black-sheep {
        background-color: burlywood;
    }

    .ultra-black-sheep {
        background-color: brown;
    }
</style>