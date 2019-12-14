class HttpWrapper {

    constructor(private _backendURL: string, private _defaultHeaders: Headers | string[][] | Record<string, string>) {
    }

    get(resource: string) {

    }

    post(resource: string, body: string) {
        return fetch(`${this._backendURL}/${resource}`, {
            method: "POST",
            mode: "cors",
            headers: this._defaultHeaders,
            body
        })
    }
}

export const api = new HttpWrapper("http://127.0.0.1:5000", {});