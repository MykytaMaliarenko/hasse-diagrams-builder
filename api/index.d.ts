declare class HttpWrapper {
    private _backendURL;
    private _defaultHeaders;
    constructor(_backendURL: string, _defaultHeaders: Record<string, string>);
    get(resource: string): void;
    post(resource: string, body: string, headers: Record<string, string>): Promise<Response>;
}
export declare const api: HttpWrapper;
export {};
