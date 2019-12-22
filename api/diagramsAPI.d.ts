import { RenderData } from "../render/renderData";
export declare const DiagramAPI: {
    buildDiagram: (equation: string, dataset: number[]) => Promise<RenderData | null>;
};
