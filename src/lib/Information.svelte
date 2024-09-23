<script>
    import { games, selectedGameIndex, gameType } from "../stores";
    export let selectedGame = new gameType();
    console.log($selectedGameIndex);
</script>

<div id="main-container">
    <img id="cover" src={selectedGame.coverPath} alt="" />
    <hr />
    <div id="words">
        <h1 id="title">{selectedGame.title}</h1>
        <h2 id="developer">{selectedGame.developer}</h2>
        <h2 id="genres">{selectedGame.genres}</h2>
    </div>
</div>

<style>
    h1,
    h2 {
        padding: 0;
        margin: 0;
    }
    hr {
        border: 1px solid rgb(38, 0, 41);
        padding: 0;
        margin: 0;
        width: 95%;
        opacity: 30%;
    }
    #cover {
        height: 500px;
        /* width: 200px; */
        padding-bottom: 1em;
    }
    #words {
        padding-top: 1em;
    }
    #main-container {
        display: flex;
        flex-direction: column;
        flex-basis: 33%;
        align-items: center;
        height: 100%;
    }
</style>
