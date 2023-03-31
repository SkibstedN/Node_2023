<script>
    import Nibling from "../Nibling/Nibling.svelte";

    export let name;
    export let niblings = [];

    let cookies = ["","","","",""];

    function handleShowLove(message) {
        console.log(message);
    }

    function handleEatCookie() {
        if (cookies.length === 0)  {
            console.log("Aaaaw, no more cookies left.")
        } else {
            cookies.pop();
            cookies = cookies;
            console.log("Have a cookie my child");
        }
    }
</script>

<!-- -->

<h2>{name}</h2>


{#each niblings as nibling (nibling.id)}

    <Nibling nibling={nibling} onShowLove=
    {handleShowLove} piblingName/>
    {/each}