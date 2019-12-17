import {RenderData} from "../render/renderData";
import {Link} from "../render/link";
import {Point} from "../render/point";
import {api} from "./index";

export const DiagramAPI = {
    buildDiagram: async (equation: string, dataset: Array<number>): Promise<RenderData | null> => {
        let response = await api.post("diagramBuilder",
            JSON.stringify({
                equation,
                dataset
            }),
            {
                "Content-Type": "application/json"
            }
        );

        if (response.ok) {
            let sorted_points = Array<Array<Point>>(),
                links = Array<Link>();

            let responseJson = await response.json();
            // @ts-ignore
            responseJson.points.forEach(line => {
                sorted_points.push([]);
                // @ts-ignore
                line.forEach(point => {
                    sorted_points[sorted_points.length - 1].push(new Point(
                        point.id,
                        point.value,
                    ));
                });
            });

            let findPoint = (id: number): undefined | Point => {
                let res: undefined | Point = undefined;
                sorted_points.forEach(line => {
                    if (res === undefined) {
                        res = line.find(point => point.id === id)
                    }
                });
                return res
            };

            // @ts-ignore
            responseJson.links.forEach(link => {
                links.push(new Link(
                    findPoint(link.x)!!,
                    findPoint(link.y)!!,
                ))
            });

            return new RenderData(sorted_points, links);
        } else {
            return null;
        }
    }
};