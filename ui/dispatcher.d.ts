export declare class Dispatcher {
    private readonly _listeners;
    on(key: string, handler: Function): void;
    emit(key: string, params?: {}): void;
}
