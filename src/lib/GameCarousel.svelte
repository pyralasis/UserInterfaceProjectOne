<script>
    import {
        games,
        currentGameCarouselIndex,
        selectedGameIndex,
    } from "../stores.js";
    import Game from "./Game.svelte";
    let numGames = $games.length;
    const carouselSize = 5;
</script>

<div id="main-container">
    <button
        id="left-arrow"
        class="arrow"
        disabled={$currentGameCarouselIndex <= 0}
        on:click={() => {
            if ($currentGameCarouselIndex > 0) $currentGameCarouselIndex--;
        }}>◀</button
    >
    <div id="games-container">
        {#each $games as currentGame, i}
            {#if i >= $currentGameCarouselIndex && $currentGameCarouselIndex + carouselSize > i}
                <Game
                    bind:game={currentGame}
                    selected={$selectedGameIndex == i}
                />
            {/if}
        {/each}
    </div>
    <button
        id="right-arrow"
        class="arrow"
        disabled={$currentGameCarouselIndex + carouselSize >= $games.length}
        on:click={() => {
            if ($currentGameCarouselIndex + carouselSize < $games.length)
                $currentGameCarouselIndex++;
        }}>▶</button
    >
</div>

<style>
    #main-container {
        display: flex;
        /* background-color: rgb(253, 200, 253); */
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* border-radius: 10px; */
        height: 150px;
        /* border: solid; */
        width: 100%;
    }
    #add-game {
        height: 100%;
        aspect-ratio: 2 / 3;
        padding: 0;
        background: none;
        border: none;
        border: 1px black solid;
    }
    #add-icon {
        height: 50px;
        width: 50px;
    }
    #games-container {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: space-around;
        height: calc(100% - 10px);
        padding: 10px;
        flex-grow: 1;
    }
    .arrow {
        padding: 0.25em;
        height: 50px;
        width: 50px;
        font-size: 2em;
        /* background-size: cover;
        background-image: url("arrow.jpg"); */
        border: 0;
        border-radius: 0;
        background-color: transparent;
    }
</style>
