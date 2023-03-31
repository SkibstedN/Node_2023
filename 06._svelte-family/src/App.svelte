<script>
  import Home from "./components/Home/Home.svelte";
  import Pibling from "./components/Pibling/Pibling.svelte";

  const piblings = ["John", "Mark"];
  const niblings = [
    {
      id: 1,
      name: "Ann",
      isGirl: true,
      cookies: []
    },
    {
      id: 2,
      name: "Amelie",
      isGirl: true,
      blackSheep: "medium-black-sheep",
      cookies: []
    },
    {
      id: 3,
      name: "Peter",
      blackSheep: "ultra-black-sheep",
      cookies: []
    }
  ];
</script>


<Home>
  <h2>This is the home of the Svelte family</h2>
  <Pibling name={piblings[0]}/>
  <Pibling name={piblings[1]}/>
</Home>
