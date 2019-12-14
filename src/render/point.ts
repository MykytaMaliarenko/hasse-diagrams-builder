type Coords = {
    x: number
    y: number
}


export class Point {
    private _active: boolean = true;

    private _coords = {
        x: 0,
        y: 0
    };

    constructor(private _id: number, private _value: number) {
    }

    eq(p: Point): boolean {
        return this._id == p._id
    }

    isActive() {
        return this._active
    }

    get coords(): Coords {
        return this._coords;
    }
}