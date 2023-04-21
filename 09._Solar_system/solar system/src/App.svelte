<script>
  import Home from "./pages/Home/Home.svelte";
  	import { Router, Link, Route } from "svelte-navigator";
    import Planets from "./pages/Planets/Planets.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/planets">Planets</Link>
  </nav>

  <Route path="/">
    <Home />
  </Route>
  <Route path="Planets">
    
  </Route>
</Router>