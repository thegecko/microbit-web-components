export class Store<T extends { [key: string]: any }> {
    private data: { [key: string]: any } = {};
    private listeners: Array<Partial<T>> = [];

    private _update(key: string, value: any) {
        this.data[key.toString()] = value;

        this.listeners.forEach(listener => {
            if (listener[key] !== undefined) {
                listener[key as keyof T] = value;
            }
        });
    }

    public addListener(listener: Partial<T>) {
        this.listeners.push(listener);
        Object.keys(this.data).forEach(key => {
            if (listener[key] !== undefined) {
                listener[key as keyof T] = this.data[key];
            }
        });
    }

    public update<K extends keyof T & string>(key: K, value: T[K]) {
        this._update(key, value);
    }

    public empty() {
        Object.keys(this.data).forEach(key => {
            this._update(key, null);
        });
    }
}
