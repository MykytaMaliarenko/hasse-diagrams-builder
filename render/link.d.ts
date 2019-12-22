import { Point } from "./point";
export declare class Link {
    private _x;
    private _y;
    constructor(_x: Point, _y: Point);
    get x(): Point;
    get y(): Point;
}
