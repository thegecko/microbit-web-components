class Store {
    constructor() {
        this.data = {};
        this.listeners = [];
    }
    _update(key, value) {
        this.data[key.toString()] = value;
        this.listeners.forEach(listener => {
            if (listener[key] !== undefined) {
                listener[key] = value;
            }
        });
    }
    addListener(listener) {
        this.listeners.push(listener);
        Object.keys(this.data).forEach(key => {
            if (listener[key] !== undefined) {
                listener[key] = this.data[key];
            }
        });
    }
    update(key, value) {
        this._update(key, value);
    }
    empty() {
        Object.keys(this.data).forEach(key => {
            this._update(key, null);
        });
    }
}

const microbitStore = new Store();

export { microbitStore as m };
