<script>
    import { gameType, selectedGameIndex } from "../stores.js";
    export let game = new gameType();
</script>

<div>
    <button
        class="game-container"
        id="game-{game.index}"
        on:click={() => ($selectedGameIndex = game.index)}
    >
        <img src={game.coverPath} alt="a" class="game-cover" />
        <div class="game-title">{game.title}</div>
    </button>
</div>

<style>
    .game-container {
        height: 150px;
        width: 100px;
        padding: 0;
        background: none;
        border: none;
    }
    .game-cover {
        height: 100px;
        width: 100px;
    }
</style>
