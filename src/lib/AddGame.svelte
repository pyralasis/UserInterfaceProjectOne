<script>
    import { games, gameType, isAddingGame, goals } from "../stores";
    let newTitle = "";
    let newGenre = "";
    let newDeveloper = "";
    let newCover = "No-Cover.png";
    function addNewGame() {
        $games = [
            ...$games,
            new gameType(
                $games.length,
                newTitle,
                newCover,
                newDeveloper,
                newGenre,
                [],
                new goals([]),
            ),
        ];
        $isAddingGame = false;
        console.log($games);
    }
</script>

<div id="main-container">
    <div class="item">
        <label for="cover">Cover</label><input type="file" id="cover" />
    </div>
    <div class="item">
        <label for="title">Title</label><input
            type="text"
            id="title"
            bind:value={newTitle}
        />
    </div>
    <div class="item">
        <label for="genre">Genre</label><input
            type="text"
            id="genre"
            bind:value={newGenre}
        />
    </div>
    <div class="item">
        <label for="developr">Developer</label><input
            type="text"
            id="developr"
            bind:value={newDeveloper}
        />
    </div>

    <div id="button-container">
        <button on:click={() => addNewGame()}>Submit New Game</button>
        <button on:click={() => ($isAddingGame = false)}>Cancel</button>
    </div>
</div>

<style>
    #main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
    }
    #button-container {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .item {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
    }
</style>
