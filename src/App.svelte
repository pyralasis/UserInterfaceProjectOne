<script>
  import AddGame from "./lib/AddGame.svelte";
  import Entries from "./lib/Entries.svelte";
  import GameCarousel from "./lib/GameCarousel.svelte";
  import Information from "./lib/Information.svelte";
  import Submit from "./lib/Submit.svelte";
  import { games, selectedGameIndex } from "./stores.js";
</script>

<div id="left-container">
  <div id="game-carousel">
    <GameCarousel></GameCarousel>
    <AddGame></AddGame>
  </div>

  <hr />
  <div id="information">
    <Information bind:selectedGame={$games[$selectedGameIndex]}></Information>
  </div>
</div>
<div id="right-container">
  <Entries></Entries>
  <hr />
  <Submit></Submit>
</div>

<style>
  hr {
    border: 1px solid rgb(38, 0, 41);
    padding: 0;
    margin: 0;
    width: 95%;
    opacity: 30%;
  }
  #left-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  #game-carousel {
    width: 100%;
  }

  #game-carousel,
  #information {
    margin: 1em;
  }

  #right-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
  }

  :global(#app) {
    /* align-items: start; */
    display: flex;
    position: fixed;
    gap: 20px;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    flex-direction: row;
    padding: 20px;
    margin: 0;
    text-align: center;
  }

  :root {
    background: linear-gradient(to bottom right, purple, pink);
  }

  :global(body) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    min-width: 320px;
    min-height: 100vh;
  }
</style>
