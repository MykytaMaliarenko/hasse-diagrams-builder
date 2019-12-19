import { RenderData } from "../render/renderData";
export declare const DiagramAPI: {
    calculateDiagram: (equation: string, dataset: number[]) => Promise<RenderData>;
};
