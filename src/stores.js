import { writable } from 'svelte/store';

export class gameType {
    constructor(index, title, coverPath, developer, genres, entries) {
        this.index = index;

        this.title = title;
        this.coverPath = coverPath;
        this.developer = developer;
        this.genres = genres;

        this.entries = entries;
    }
    addEntry(entry) {
        this.entries.append(entry);
    }
}

export class gameEntry {
    constructor(index, date, timePlayed, rating) {
        this.index = index;

        this.date = date;

        this.timePlayed = timePlayed;
        this.rating = rating;
    }
}

const date = new Date();
let currentDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
let defaultData =
    [new gameType(0, "Minecraft", "Minecraft_game_cover.jpeg", "Mojang", "Sandbox", [new gameEntry(0, currentDate, 90), new gameEntry(1, currentDate + "2", 91)]),
    new gameType(1, "Terraria", "Terraria_game_cover.jpg", "Re-Logic", "Sandbox", [new gameEntry(0, currentDate, 90)]),
    new gameType(2, "Overwatch", "Overwatch_cover_art.jpg", "Blizzard", "Hero Shooter", [new gameEntry(0, currentDate, 90)]),
    new gameType(3, "Tokaido", "Tokaido.jpg", "TODO", "Boardgame", [new gameEntry(0, currentDate, 90)]),
    new gameType(4, "Deadlock", "deadlock_cover.jpg", "Valve", "Moba", [new gameEntry(0, currentDate, 90)]),
    new gameType(5, "Unrailed", "Unrailed.jpg", "TODO", "Cooperative", [new gameEntry(0, currentDate + "1", 90)])
    ];

export const games = writable(defaultData);

export const currentGameCarouselIndex = writable(0);

export const selectedGameIndex = writable(0);

export const selectedEntry = writable(new gameEntry())
