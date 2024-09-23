<script>
    import { games, selectedGameIndex, gameType } from "../stores";
    export let selectedGame = new gameType();
    console.log($selectedGameIndex);
</script>

<div id="main-container">
    <img id="cover" src={selectedGame.coverPath} alt="" />
    <div id="title">{selectedGame.title}</div>
    <div id="developer">{selectedGame.developer}</div>
    <div id="genres">{selectedGame.genres}</div>
</div>

<style>
    #cover {
        height: 500px;
        width: 200p;
    }
</style>
