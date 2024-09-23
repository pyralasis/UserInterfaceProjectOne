<script>
    import { games, gameType, isAddingGame } from "../stores";
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
            ),
        ];
        $isAddingGame = false;
    }
</script>

<div id="main-container">
    <label for="cover">Cover</label><input type="file" id="cover" />
    <label for="title">Title</label><input
        type="text"
        id="title"
        bind:value={newTitle}
    />
    <label for="genre">Genre</label><input
        type="text"
        id="genre"
        bind:value={newGenre}
    />
    <label for="developr">Developer</label><input
        type="text"
        id="developr"
        bind:value={newDeveloper}
    />
    <button on:click={() => addNewGame()}>Submit New Game</button>
    <button on:click={() => ($isAddingGame = false)}>Cancel</button>
</div>

<style>
    #main-container {
        display: flex;
        flex-direction: column;
    }
</style>
