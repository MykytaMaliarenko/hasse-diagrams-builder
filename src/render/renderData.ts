import {Point} from "./point";
import {Link} from "./link";

export class RenderData {
    points: Array<Point>;
    links: Array<Link>;

    constructor(points: Array<Point>, links: Array<Link>) {
        this.points = points;
        this.links = links;
    }

}