import { Point } from "./point";
import { Link } from "./link";
export declare class RenderData {
    private _points;
    private _links;
    constructor(_points: Array<Array<Point>>, _links: Array<Link>);
    get points(): Array<Array<Point>>;
    get links(): Array<Link>;
}
