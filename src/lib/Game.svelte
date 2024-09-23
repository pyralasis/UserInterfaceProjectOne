<script>
    import { gameType, selectedGameIndex } from "../stores.js";

    export let game = new gameType();
    export let selected = false;
</script>

<button
    class="game-container"
    class:selected
    id="game-{game.index}"
    style="background-image:url({game.coverPath}); background-size:100px 150px;"
    on:click={() => ($selectedGameIndex = game.index)}
>
</button>

<style>
    /* div {
        margin: 0.25em;
    } */
    .game-container {
        height: 100%;
        width: 100px;
        padding: 0;
        background: none;
        border: 2px black solid;
    }

    .selected {
        border: 2px solid lightblue;
        border-radius: 10px;
    }
</style>
