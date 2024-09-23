<script>
    import {
        gameEntry,
        selectedEntry,
        games,
        selectedGameIndex,
        isEditingEntry,
    } from "../stores";

    $: selectedGameEntries = $games[$selectedGameIndex].entries;
</script>

<h1>My Entries</h1>
<div id="main-container">
    <div id="dates-container">
        {#each selectedGameEntries as currentEntry}
            <button
                class="entry-selector"
                on:click={() => ($selectedEntry = currentEntry)}
            >
                {currentEntry.date}
            </button>
            <hr />
        {/each}
    </div>
    <div id="entry-information">
        <div class="entry-line">
            <p class="entry-header">Time Played:</p>
            <p class="entry-data">{$selectedEntry.timePlayed}</p>
        </div>
        <div class="entry-line">
            <p class="entry-header">Rating:</p>
            <div style="display: flex; flex-direction: row;">
                <svg height="20" width="20" style="padding-top: .4em;">
                    <circle
                        r="10"
                        cx="10"
                        cy="10"
                        fill="rgb({$selectedEntry.ratingRed}, {$selectedEntry.ratingGreen}, 0)"
                    ></circle>
                </svg>
                <p class="entry-data">{$selectedEntry.rating}</p>
            </div>
        </div>
        <div class="entry-line">
            <p class="entry-header">Liked:</p>
            <p class="entry-data">{$selectedEntry.like}</p>
        </div>
        <div class="entry-line">
            <p class="entry-header">Disliked:</p>
            <p class="entry-data">{$selectedEntry.dislike}</p>
        </div>
    </div>
</div>
<button on:click={() => ($isEditingEntry = true)}>Edit Entry</button>

<style>
    .entry-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #dates-container {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        max-height: 40%;
        height: 40%;
        width: 150px;
        background-color: transparent;
        border: 2px black solid;
    }
    .entry-selector {
        padding: 0;
        background: none;
        /* border: 2px black solid;
        border-radius: 0; */
        margin: 0;
        font-size: 1.5em;
    }
    .entry-container {
        margin: 0;
        padding: 0;
        width: 50px;
    }
    #entry-information {
        width: 50%;
    }
    hr {
        border: 1px solid lightgray;
        padding: 0;
        margin: 0;
        width: 95%;
        opacity: 50%;
    }
    #main-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 70%;
        max-height: 30%;
        height: 30%;
        flex-basis: 50;
    }

    p {
        padding: 0;
        margin: 0;
        font-size: 1.2em;
    }
</style>
