class HttpWrapper {

    constructor(private _backendURL: string, private _defaultHeaders: Record<string, string>) {
    }

    get(resource: string) {

    }

    post(resource: string, body: string, headers: Record<string, string>) {
        let myHeaders = {...this._defaultHeaders, ...headers};

        return fetch(`${this._backendURL}/${resource}`, {
            method: "POST",
            mode: "cors",
            headers: myHeaders,
            body
        })
    }
}

export const api = new HttpWrapper("http://127.0.0.1:5000", {});