import { Point } from "./point";
import { Link } from "./link";
export declare type DrawerType = {
    ctx: CanvasRenderingContext2D;
    drawPoint(point: Point): void;
    drawLink(link: Link): void;
    clear(): void;
};
export declare const drawer: (canvas: HTMLCanvasElement) => DrawerType;
