class HttpWrapper {

    constructor(private _backendURL: string, private _defaultHeaders: object) {
    }

    get(resource: string, params: object) {

    }

    post(resource: string, params: object) {

    }
}

export const api = new HttpWrapper("/", {});