export class Store<T> {
    private data: { [key: string]: any } = {};
    private listeners: Partial<T>[] =[];

    private _update(key: string, value: any) {
        this.data[key.toString()] = value;

        this.listeners.forEach(listener => {
            if (listener[key] !== undefined) {
                listener[key] = value;
            }
        });
    }

    public addListener(listener: Partial<T>) {
        this.listeners.push(listener);
        Object.keys(this.data).forEach(key => {
            if (listener[key] !== undefined) {
                listener[key] = this.data[key];
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
