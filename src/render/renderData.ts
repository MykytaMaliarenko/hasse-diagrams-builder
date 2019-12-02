import {Point} from "./point";
import {Link} from "./link";

export class RenderData {

    constructor(private _points: Array<Point>, public _links: Array<Link>) {}

    get points(): Array<Point> {
        return this._points
    }

    get links(): Array<Link> {
        return this._links
    }

}