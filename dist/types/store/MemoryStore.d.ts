import Store from "./Store";
/** Class that stores key/value pairs in memory. */
export default class MemoryStore implements Store {
    private readonly store;
    constructor();
    get(key: string): string | null;
    set(key: string, value: string): void;
    remove(key: string): void;
}
