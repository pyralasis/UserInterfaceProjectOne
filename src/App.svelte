<script>
  import AddGameButton from "./lib/AddGameButton.svelte";
  import AddGame from "./lib/AddGame.svelte";
  import Goals from "./lib/Goals.svelte";
  import Entries from "./lib/Entries.svelte";
  import GameCarousel from "./lib/GameCarousel.svelte";
  import Information from "./lib/Information.svelte";
  import Submit from "./lib/Submit.svelte";
  import { fade } from "svelte/transition";

  import {
    games,
    selectedGameIndex,
    isAddingGame,
    isEditingEntry,
    isSubmitTransitionActive,
  } from "./stores.js";
  import EditEntry from "./lib/EditEntry.svelte";
</script>

<div id="left-container">
  <div id="game-carousel">
    <GameCarousel></GameCarousel>
    <AddGameButton></AddGameButton>
  </div>

  <hr />
  <div id="information">
    {#if !$isAddingGame}
      <Information bind:selectedGame={$games[$selectedGameIndex]}></Information>
    {:else}
      <AddGame></AddGame>
    {/if}
  </div>
</div>
<div id="right-container">
  <Goals></Goals>
  <hr id="right-container-hr" />

  <Entries></Entries>
  <hr id="right-container-hr" />
  {#if !$isEditingEntry}
    <Submit></Submit>
  {:else}
    <EditEntry></EditEntry>
  {/if}
  {#if $isSubmitTransitionActive}
    <div
      id="submitted-container"
      transition:fade={{ duration: 1000 }}
      on:introend={() => ($isSubmitTransitionActive = false)}
    >
      <div>Submitted!</div>
      <svg height="20" width="20">
        <circle r="10" cx="10" cy="10" fill="green"></circle>
        <text x="50%" y="50%" text-anchor="middle">✔</text>
      </svg>
    </div>
  {/if}
</div>

<style>
  hr {
    border: 1px solid rgb(38, 0, 41);
    padding: 0;
    margin: 0;
    width: 95%;
    opacity: 30%;
  }

  #right-container-hr {
    margin: 1em 0;
    width: 70%;
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
    align-items: center;
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
