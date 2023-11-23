interface Store {
    get(key: string): any | null;
    set(key: string, value: any): void;
    remove(key: string): void;
}
export default Store;
