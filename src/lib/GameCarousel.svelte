<script>
    import {
        games,
        currentGameCarouselIndex,
        selectedGameIndex,
    } from "../stores.js";
    import Game from "./Game.svelte";
    let numGames = $games.length;
    console.log($games[0].entries[0]);
    // for (let i = 0; i < numGames; i++) {
    //     const element = $games[i];
    //     let a = new Game({ target: document.querySelector("#main-container") });
    // }
    const carouselSize = 5;
</script>

<div id="main-container">
    <button
        id="left-arrow"
        on:click={() => {
            if ($currentGameCarouselIndex > 0) $currentGameCarouselIndex--;
        }}>Left</button
    >
    <div id="games-container">
        {#each $games as currentGame, i}
            {#if i >= $currentGameCarouselIndex && $currentGameCarouselIndex + carouselSize > i}
                {#if $selectedGameIndex == i}
                    <div class="selected-game">
                        <Game bind:game={currentGame}></Game>
                    </div>
                {:else}
                    <div>
                        <Game bind:game={currentGame}></Game>
                    </div>
                {/if}
            {/if}
        {/each}
    </div>
    <button id="add-game">
        <img id="add-icon" src="Add-Button.png" alt="add button" />
        <div class="game-title">add game</div>
    </button>

    <button
        id="right-arrow"
        on:click={() => {
            if ($currentGameCarouselIndex + carouselSize < $games.length)
                $currentGameCarouselIndex++;
        }}>Right</button
    >
</div>

<style>
    #main-container {
        display: flex;
        background-color: slategray;
        height: 150px;
        width: 1000px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border: solid;
    }
    #add-game {
        height: 150px;
        width: 100px;
        padding: 0;
        background: none;
        border: none;
    }
    #add-icon {
        height: 100px;
        width: 100px;
    }
    #games-container {
        display: flex;
        flex-direction: row;
    }
    .selected-game {
        border: 3px solid lightblue;
        border-radius: 10px;
    }
</style>
