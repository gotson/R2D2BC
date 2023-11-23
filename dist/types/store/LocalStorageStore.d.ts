import Store from "./Store";
export interface LocalStorageStoreConfig {
    /** String to prepend to keys in localStorage. If the same prefix is shared
          across LocalStorageStores on the same domain, they will have the same
          value for each key. */
    prefix: string;
    useLocalStorage: boolean;
}
/** Class that stores key/value pairs in localStorage if possible
    but falls back to an in-memory store. */
export default class LocalStorageStore implements Store {
    private readonly fallbackStore;
    private readonly prefix;
    private readonly useLocalStorage;
    constructor(config: LocalStorageStoreConfig);
    private getLocalStorageKey;
    get(key: string): any | null;
    set(key: string, value: any): void;
    remove(key: string): void;
}
