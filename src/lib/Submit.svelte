<script>
    import { games, selectedGameIndex, gameEntry } from "../stores";
    let value = "1";
    function submitEntry() {
        const date = new Date();
        let currentDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
        $games[$selectedGameIndex].entries.push(
            new gameEntry(
                $games[$selectedGameIndex].entries.length,
                currentDate,
                90,
            ),
        );
        console.log($games[$selectedGameIndex].entries);
    }
</script>

<div id="main-container">
    <div id="rating-container">
        <label for="rating">Rate your session on a scale of 1-10</label><input
            type="range"
            max="10"
            min="1"
            id="rating"
            bind:value
        />
        <div>{value}</div>
    </div>
    <div id="time-played-container">
        <label for="time-played">Minutes Played This Session</label>
        <input type="number" id="time-played" min="1" value="1" />
    </div>

    <button id="submit-button" on:click={() => submitEntry()}>Submit</button>
</div>

<style>
    #main-container {
        display: flex;
        flex-direction: column;
    }
    #rating-container {
        display: flex;
        flex-direction: row;
    }
</style>
