type Coords = {
    x: number
    y: number
}


export class Point {
    public active: boolean = true;

    private _coords = {
        x: 0,
        y: 0
    };

    constructor(private _id: number, private _value: number) {
    }

    eq(p: Point): boolean {
        return this._id == p._id
    }

    get coords(): Coords {
        return this._coords;
    }

    set coords(v: {x: number, y: number}) {
        this._coords.x = v.x;
        this._coords.y = v.y;
    }

    get id(): number {
        return this._id
    }

    get value(): number {
        return this._value
    }
}