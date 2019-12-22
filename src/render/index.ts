import {RenderData} from "./renderData";
import {Point} from "./point";
import {DrawerType, drawer} from "./drawer";

const MARGIN_X = 40;
const MARGIN_Y = 50;

export class CoreRender {
    private _renderData!: RenderData;

    private _width: number = 0;
    private _height: number = 0;

    private _clicked_point: Point | null = null;

    private _mainCanvasDrawer: DrawerType;
    private _subCanvasDrawer: DrawerType;

    constructor(private container: HTMLElement,
                private _mainCanvas: HTMLCanvasElement, private _subCanvas: HTMLCanvasElement) {
        //add event handlers
        window.onresize = () => {
            this.sizes = {w: container.clientWidth, h: container.clientHeight};
            this.render();
        };

        this.sizes = {w: container.clientWidth, h: container.clientHeight};

        this._mainCanvasDrawer = drawer(this._mainCanvas);
        this._subCanvasDrawer = drawer(this._subCanvas);

        _subCanvas.onmousedown = (e) => this.onClick(e);

        _subCanvas.onmousemove = (e) => this.onMouseMove(e);

        _subCanvas.onmouseup = () => this.onMouseUp();
    }

    set renderData(v: RenderData) {
        this._renderData = v;
        this.calculateCoords();
    }

    private set sizes(sizes: {w: number, h: number}) {
        this._mainCanvas.width = sizes.w;
        this._mainCanvas.height = sizes.h;

        this._subCanvas.width = sizes.w;
        this._subCanvas.height = sizes.h;

        this._width = sizes.w;
        this._height = sizes.h;
    }

    recalculateCoords() {
        this.calculateCoords();
    }

    render() {
        this._mainCanvasDrawer.clear();
        let points = this._renderData.points;
        //console.log({points});
        points.forEach((line) => {
            line.filter(p => p.active).forEach(point => this._mainCanvasDrawer.drawPoint(point));
        });

        let links = this._renderData.links;
        links.filter(link => link.x.active && link.y.active).forEach(link => this._mainCanvasDrawer.drawLink(link));
    }

    renderSub() {
        this._subCanvasDrawer.clear();
        if (this._clicked_point) {
            this._subCanvasDrawer.drawPoint(this._clicked_point);
        }
    }

    private calculateYStep(numOfLines: number): number {
        return (this._height - MARGIN_Y ) / numOfLines
    }

    private calculateXStep(numOfPoints: number): number {
        return (this._width - MARGIN_X ) / numOfPoints
    }

    private calculateCoords() {
        let lines = this._renderData.points;
        let yStep = this.calculateYStep(lines.length - 1);

        lines.forEach((line, lineIndex) => {
            let y = this._height - (lineIndex) * yStep;

            if (line.length != 1) {
                let xStep =  this.calculateXStep(line.length - 1);
                line.forEach((point, index) => {
                    point.coords.x = xStep * index + (MARGIN_X / 2);
                    point.coords.y = y - (MARGIN_Y / 2);
                })
            } else {
                line[0].coords.x = this._width / 2 + (MARGIN_X / 2);
                line[0].coords.y = y - (MARGIN_Y / 2);
            }
        })
    }

    private onClick(e: MouseEvent) {
        let x = e.offsetX,
            y = e.offsetY;

        this._renderData.points.every(line => {
            return line.every(point => {
                console.log({point, delta: {x: Math.abs(point.coords.x - x), y: Math.abs(point.coords.y - y)}});
                if (Math.abs(point.coords.x - x) < 10 && Math.abs(point.coords.y - y) < 10) {
                    point.active = !point.active;
                    this._clicked_point = point;
                    return false
                }
                return true
            })
        });

        this.render();
        this._subCanvasDrawer.clear();
        this._subCanvasDrawer.drawPoint(this._clicked_point!);
    }

    private onMouseMove(e: MouseEvent) {
        if (this._clicked_point) {
            this._clicked_point.coords = {
                x: e.offsetX,
                y: e.offsetY,
            };
            this._subCanvasDrawer.clear();
            this._subCanvasDrawer.drawPoint(this._clicked_point);
        }
    }

    private onMouseUp() {
        if (this._clicked_point) {
            this._subCanvasDrawer.clear();
            this._clicked_point!.active = true;
            this._clicked_point = null;
            this.render();
        }
    }
}