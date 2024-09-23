<script>
    import {
        games,
        selectedGameIndex,
        gameEntry,
        isSubmitTransitionActive,
        goal,
    } from "../stores";
    $: addGoal = false;
    let goalText = "";

    let ratingValue = 1;

    let playtime = 0;
    let like = "";
    let dislike = "";
    function submitEntry() {
        const date = new Date();
        let currentDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
        $games[$selectedGameIndex].entries = [
            ...$games[$selectedGameIndex].entries,
            new gameEntry(
                $games[$selectedGameIndex].entries.length,
                currentDate,
                playtime,
                ratingValue,
                like,
                dislike,
            ),
        ];

        if (addGoal && goalText != "") {
            // $games[$selectedGameIndex].goals = [
            //     ...$games[$selectedGameIndex].goals,
            //     new goal(
            //         $games[$selectedGameIndex].goals.length,
            //         goalText,
            //         false,
            //     ),
            // ];
            $games[$selectedGameIndex].goals.addGoal(
                new goal(
                    $games[$selectedGameIndex].goals.goals.length,
                    goalText,
                    false,
                ),
            );
        }
        console.log($games[$selectedGameIndex]);
        $isSubmitTransitionActive = true;
    }
</script>

<div id="main-container">
    <h1 style="margin-top: 0;">Submit a New Entry</h1>

    <div>
        <label for="notes">What did you like?</label><input
            type="text"
            id="notes"
            bind:value={like}
        />
    </div>

    <div>
        <label for="notes">What did you dislike?</label><input
            type="text"
            id="notes"
            bind:value={dislike}
        />
    </div>

    <div id="rating-container">
        <label for="rating">Rate your session on a scale of 1-10</label><input
            type="range"
            max="10"
            min="1"
            id="rating"
            bind:value={ratingValue}
        />
        <div>{ratingValue}</div>
    </div>
    <div id="time-played-container">
        <label for="time-played">Minutes Played This Session</label>
        <input type="number" id="time-played" min="1" bind:value={playtime} />
    </div>
    <div>
        <label for="">Add Goal?</label>
        <input
            type="checkbox"
            name="add-goal-check"
            id="add-goal-check"
            bind:value={addGoal}
        />
        {#if addGoal}
            <input type="text" bind:value={goalText} />
        {/if}
    </div>
    <button id="submit-button" on:click={() => submitEntry()}>Submit </button>
</div>

<style>
    text {
        font-size: 1.5em;
    }
    #main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-basis: 25;
    }
    #rating-container {
        display: flex;
        flex-direction: row;
    }
    #submit-button {
        width: 20%;
    }
    #submitted-container {
        display: flex;
        flex-direction: row;
    }
</style>
