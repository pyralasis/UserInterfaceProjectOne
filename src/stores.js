import { writable } from 'svelte/store';

export class gameType {
    constructor(index, title, coverPath, developer, genres, entries, goals) {
        this.index = index;

        this.title = title;
        this.coverPath = coverPath;
        this.developer = developer;
        this.genres = genres;

        this.entries = entries;
        this.goals = goals;

    }
    addEntry(entry) {
        this.entries.append(entry);
    }
}

export class gameEntry {
    constructor(index, date, timePlayed, rating, like, dislike) {
        this.index = index;

        this.date = date;

        this.timePlayed = timePlayed;
        this.rating = rating;

        this.ratingRed = 250 - 25 * (this.rating - 1);
        this.ratingGreen = 0 + 25 * (this.rating - 1);

        this.like = like;
        this.dislike = dislike
    }
}

export class goals {
    constructor(goals) {
        this.goals = goals;
    }
    addGoal(newGoal) {
        this.goals = [...this.goals, newGoal];
    }

}

export class goal {
    constructor(index, goalText, completed) {
        this.index = index;
        this.goalText = goalText;
        this.completed = completed;
    }
}

const date = new Date();
let currentDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
let defaultData =
    [new gameType(0, "Minecraft", "Minecraft_game_cover.jpeg", "Mojang", "Sandbox", [new gameEntry(0, currentDate, 90, 5, "I liked X.", "I disliked Y."), new gameEntry(1, currentDate + "2", 91, 5, "I liked X.", "I disliked Y.")], new goals([new goal(0, "TEST GOAL ONE", false), new goal(1, "TEST GOAL TWO", true)])),
    new gameType(1, "Terraria", "Terraria_game_cover.jpg", "Re-Logic", "Sandbox", [new gameEntry(0, currentDate, 90, 5, "I liked X.", "I disliked Y.")], new goals([])),
    new gameType(2, "Overwatch", "Overwatch_cover_art.jpg", "Blizzard", "Hero Shooter", [new gameEntry(0, currentDate, 90, 5, "I liked X.", "I disliked Y.")], new goals([])),
    new gameType(3, "Tokaido", "Tokaido.jpg", "TODO", "Boardgame", [new gameEntry(0, currentDate, 90, 5, "I liked X.", "I disliked Y.")], new goals([])),
    new gameType(4, "Deadlock", "deadlock_cover.jpg", "Valve", "Moba", [new gameEntry(0, currentDate, 90, 5, "I liked X.", "I disliked Y.")], new goals([])),
    new gameType(5, "Unrailed", "Unrailed.jpg", "TODO", "Cooperative", [new gameEntry(0, currentDate + "1", 90, 5, "I liked X.", "I disliked Y.")], new goals([]))
    ];

export const games = writable(defaultData);

export const currentGameCarouselIndex = writable(0);

export const selectedGameIndex = writable(0);

export const selectedEntry = writable(defaultData[0].entries[0]);

export const currentGameTimePlayed = writable(0);

export const isAddingGame = writable(false);
export const isEditingEntry = writable(false);

export const isSubmitTransitionActive = writable(false);