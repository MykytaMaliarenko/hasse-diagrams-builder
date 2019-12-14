import {Point} from "./point";

export class Link {

    constructor(private _x: Point, private _y: Point) {}

    get x(): Point {
        return this._x
    }

    get y(): Point {
        return this._y
    }
}