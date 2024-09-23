<script>
  import Entries from "./lib/Entries.svelte";
  import GameCarousel from "./lib/GameCarousel.svelte";
  import Information from "./lib/Information.svelte";
  import Submit from "./lib/Submit.svelte";
  import { games, selectedGameIndex } from "./stores.js";
</script>

<main>
  <div id="main-container">
    <GameCarousel></GameCarousel>
    <Information bind:selectedGame={$games[$selectedGameIndex]}></Information>
    <div id="bottom-container">
      <Entries bind:selectedGameEntries={$games[$selectedGameIndex].entries}
      ></Entries>
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
  :global(#app) {
    /* align-items: start; */
    /* display: flex;
    position: fixed;
    top: 0;
    right: 50%;
    justify-content: center; */
  }
  :global(body) {
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
</style>
