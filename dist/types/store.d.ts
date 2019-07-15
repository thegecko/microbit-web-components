export declare class Store<T> {
    private data;
    private listeners;
    private _update;
    addListener(listener: Partial<T>): void;
    update<K extends keyof T & string>(key: K, value: T[K]): void;
    empty(): void;
}
