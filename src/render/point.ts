type Coords = {
    x: number
    y: number
}


export class Point {
    isActive: boolean = true;

    constructor(public name: string, private _coords: Coords) {}

    set coords(coords: Coords) {
        this._coords = coords;
    }

    get coords(): Coords {
        return this._coords;
    }
}