<script>
    import {
        games,
        selectedGameIndex,
        gameType,
        currentGameTimePlayed,
    } from "../stores";
    export let selectedGame = new gameType();

    //Calculate total playtime
    $: timePlayedString = "";
    $: {
        $currentGameTimePlayed = 0;
        selectedGame.entries.forEach((element) => {
            $currentGameTimePlayed += element.timePlayed;
        });
        timePlayedString = `Total Playtime: ${$currentGameTimePlayed} Minutes`;

        if ($currentGameTimePlayed > 59) {
            let hours = ($currentGameTimePlayed / 60).toFixed(2);
            timePlayedString = `Total Playtime: ${hours} Hours`;
        }
    }

    $: numGoals = selectedGame.goals.goals.length;
</script>

<div id="main-container">
    <img id="cover" src={selectedGame.coverPath} alt="" />
    <hr />
    <div id="words">
        <h1 id="title">{selectedGame.title}</h1>
        <h2 id="developer">{selectedGame.developer}</h2>
        <h2 id="genres">{selectedGame.genres}</h2>
        <h2>{timePlayedString}</h2>
        <h2>Total Goals: {numGoals}</h2>
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
        padding-bottom: 1em;
    }
    #words {
        padding-top: 1em;
    }
    #main-container {
        display: flex;
        flex-direction: column;
        flex-basis: 33%;
        justify-content: center;
        height: 100%;
    }
</style>
