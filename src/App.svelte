<script>
  import Entries from "./lib/Entries.svelte";
  import GameCarousel from "./lib/GameCarousel.svelte";
  import Information from "./lib/Information.svelte";
  import Submit from "./lib/Submit.svelte";
  import { games } from "./stores.js";
</script>

<main>
  <div id="main-container">
    <GameCarousel></GameCarousel>
    <Information></Information>
    <div id="bottom-container">
      <Entries></Entries>
      <Submit></Submit>
    </div>
  </div>
</main>

<style>
  #main-container {
    display: flex;
    flex-direction: column;
  }
  #bottom-container {
    display: flex;
    flex-direction: row;
  }
</style>
