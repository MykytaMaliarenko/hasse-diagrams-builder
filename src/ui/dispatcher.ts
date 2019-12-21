export class Dispatcher {
    private readonly _listeners: Record<string, Array<Function>> = {};

    on(key: string, handler: Function) {
        if (!this._listeners[key]) {
            this._listeners[key] = Array<Function>();
        }
        this._listeners[key].push(handler);
    }

    emit(key: string, params = {}) {
        this._listeners[key].forEach((listener) => listener(params))
    }
}