import {RenderData} from "../render/renderData";
import {Link} from "../render/link";
import {Point} from "../render/point";
import {api} from "./index";

export const DiagramAPI = {
    buildDiagram: async (equation: string, dataset: Array<number>): Promise<RenderData | null> => {
        let response = await api.post("diagramBuilder", JSON.stringify({
            equation,
            dataset
        }));

        if (response.ok) {
            let points = Array<Point>(),
                links = Array<Link>();

            let responseJson = await response.json();
            // @ts-ignore
            responseJson.points.forEach(point => {
                points.push(new Point(
                    point.id,
                    point.value,
                ))
            });

            // @ts-ignore
            responseJson.links.forEach(link => {
                links.push(new Link(
                    points.find(point => point.id === <number> link.x)!!,
                    points.find(point => point.id === <number> link.y)!!
                ))
            });

            return new RenderData(points, links);
        } else {
            return null;
        }
    }
};