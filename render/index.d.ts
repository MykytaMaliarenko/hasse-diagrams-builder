import { RenderData } from "./renderData";
export declare class CoreRender {
    private mainCanvas;
    private subCanvas;
    constructor(mainCanvas: HTMLElement, subCanvas: HTMLElement);
    render(data: RenderData): void;
}
