<script>
    import { games, selectedGameIndex } from "../stores";
    $: goals = $games[$selectedGameIndex].goals.goals;
</script>

<div id="main-container">
    <h1>Goals</h1>
    <div id="inner">
        <div id="current">
            <h2>Current Goals</h2>
            {#each goals as goal}
                {#if !goal.completed}
                    <div class="goal">
                        <div>{goal.goalText}</div>
                        <button
                            class="complete"
                            on:click={() => (goal.completed = true)}>✔️</button
                        >
                    </div>
                {/if}
            {/each}
        </div>
        <div id="completed">
            <h2>Completed Goals</h2>
            {#each goals as goal}
                {#if goal.completed}
                    <div>{goal.goalText}</div>
                {/if}
            {/each}
        </div>
    </div>
</div>

<style>
    #main-container {
        width: 100%;
        flex-basis: 25;
    }
    #inner {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
    }
    .goal {
        display: flex;
        flex-direction: row;
    }
    .complete {
        padding: 0;
        margin: 0;
        background-color: transparent;
    }
</style>
