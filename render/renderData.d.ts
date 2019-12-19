import { Point } from "./point";
import { Link } from "./link";
export declare class RenderData {
    private _points;
    _links: Array<Link>;
    constructor(_points: Array<Point>, _links: Array<Link>);
    get points(): Array<Point>;
    get links(): Array<Link>;
}
