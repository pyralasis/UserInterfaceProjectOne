<script>
    import { isAddingGame } from "../stores";
</script>

<button on:click={() => ($isAddingGame = true)}>Add Game</button>

<style>
    button {
        margin: 1px;
        width: 80%;
        font-size: 1.5em;
        padding: 0;
        border: 2px black solid;
    }
</style>
