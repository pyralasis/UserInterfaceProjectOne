<script>
    import {
        selectedEntry,
        isEditingEntry,
        isSubmitTransitionActive,
    } from "../stores";
    let ratingValue = $selectedEntry.rating;

    let playtime = $selectedEntry.playtime;
    let like = $selectedEntry.like;
    let dislike = $selectedEntry.dislike;

    function saveEdit() {
        $isSubmitTransitionActive = true;
        $isEditingEntry = false;
        $selectedEntry.like = like;
        $selectedEntry.dislike = dislike;
        $selectedEntry.ratingValue = ratingValue;
        $selectedEntry.playtime = playtime;
    }
</script>

<div id="main-container">
    <h1 style="margin-top: 0;">Edit an Entry</h1>

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

    <button id="submit-button" on:click={() => saveEdit()}>Save </button>
    <button id="submit-button" on:click={() => ($isEditingEntry = false)}
        >Cancel
    </button>
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
    div {
        font-size: 20px;
    }
</style>
