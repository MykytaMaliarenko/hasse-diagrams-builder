import {RenderData} from "../render/renderData";
import {Link} from "../render/link";
import {Point} from "../render/point";

export const DiagramAPI = {
    calculateDiagram: (equation: string, dataset: Array<number>): RenderData => {
        return new RenderData(new Array<Point>(), new Array<Link>());
    }
};