import { RenderData } from "./renderData";
export declare class CoreRender {
    private container;
    private _mainCanvas;
    private _subCanvas;
    private _renderData;
    private _width;
    private _height;
    private _clicked_point;
    private _mainCanvasDrawer;
    private _subCanvasDrawer;
    constructor(container: HTMLElement, _mainCanvas: HTMLCanvasElement, _subCanvas: HTMLCanvasElement);
    set renderData(v: RenderData);
    private set sizes(value);
    recalculateCoords(): void;
    render(): void;
    renderSub(): void;
    private calculateYStep;
    private calculateXStep;
    private calculateCoords;
    private onClick;
    private onMouseMove;
    private onMouseUp;
}
