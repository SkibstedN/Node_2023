<script>
  import Bird from "./Bird.svelte";

    const birds = ["Pigeon", "Eagle", "Chicken", "Turkey", "Owl"];
    const birdEmoji = ["b", "g", "f", "", "d"];

    let birdIndex = 0;
    let favoriteBird = birds[birdIndex];

    function changeFavoriteBird() {
        birdIndex = (birdIndex +1) % birds.length;
    }

</script>

<!--<Bird name={birds[0]} emoji={birdEmoji[0]} />
<Bird name={birds[1]} emoji={birdEmoji[1]} />-->

