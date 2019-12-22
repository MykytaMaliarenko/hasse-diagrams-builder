import {Point} from "./point";
import {Link} from "./link";

const POINT_RADIUS = 5;
const POINT_COLOR = "#000000";

export type DrawerType = {
    ctx: CanvasRenderingContext2D,

    drawPoint(point: Point): void,

    drawLink(link: Link): void,

    clear(): void
}


export const drawer = (canvas: HTMLCanvasElement): DrawerType => {
    let ctx = canvas.getContext("2d")!;

    return {
        ctx,

        drawPoint(point: Point) {
            this.ctx.beginPath();
            this.ctx.arc(point.coords.x, point.coords.y, POINT_RADIUS, 0, 2 * Math.PI);
            this.ctx.strokeStyle = POINT_COLOR;
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.fillText(`${point.value}`, point.coords.x + 10, point.coords.y);
        },

        drawLink(link: Link) {
            this.ctx.beginPath();
            this.ctx.moveTo(link.x.coords.x, link.x.coords.y);
            this.ctx.lineTo(link.y.coords.x, link.y.coords.y);
            this.ctx.stroke();
        },

        clear() {
            this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
    }
};