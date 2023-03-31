<script>
    import { refrigeratorMessages } from "../../store/refrigeratorMessage";

    console.log(refrigeratorMessages);
</script>

<h5>{$refrigeratorMessages}</h5>
<button on:click={eraseFridgeMessages}>Erase Fridge Messages</button>

<slot></slot>

<p>-------------------</p>
<p>|    Welcome      |</p>
<p>-------------------</p>