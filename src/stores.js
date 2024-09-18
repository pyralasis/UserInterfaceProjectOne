import { writable } from 'svelte/store';

class gameType {
    constructor(title, coverPath) {
        this.coverPath = coverPath;
        this.title = title;
    }
}

function game() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        increment: () => { },
        decrement: () => { },
        reset: () => { }
    };
}
export const games = writable([new gameType("Minecraft", "asset")]);