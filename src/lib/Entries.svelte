<script>
    import { gameEntry, selectedEntry } from "../stores";
    export let selectedGameEntries = [new gameEntry()];
</script>

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
        <div>{$selectedEntry.timePlayed}</div>
    </div>
</div>

<style>
    #dates-container {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: 100px;
        width: 150px;
        background-color: white;
    }
    .entry-selector {
        padding: 0;
        background: none;
        /* border: 2px black solid;
        border-radius: 0; */
        margin: 0;
    }
    .entry-container {
        margin: 0;
        padding: 0;
        width: 50px;
    }
    hr {
        border: 1px solid lightgray;
        padding: 0;
        margin: 0;
        width: 95%;
        opacity: 50%;
    }
</style>
