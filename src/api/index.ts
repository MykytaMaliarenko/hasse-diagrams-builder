class HttpWrapper {
    backendURL: string;
    defaultHeaders: object;

    constructor(backendURL: string, defaultHeaders: object) {
        this.backendURL = backendURL;
        this.defaultHeaders = defaultHeaders;
    }


    get(resource: string, params: object) {

    }

    post(resource: string, params: object) {

    }
}

export const api = new HttpWrapper("/", {});