import {Point} from "./point";

export class Link {

    constructor(private _a: Point, private _b: Point) {}

    get a(): Point {
        return this._a
    }

    get b(): Point {
        return this._b
    }
}