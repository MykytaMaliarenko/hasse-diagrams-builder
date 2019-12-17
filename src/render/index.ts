import {RenderData} from "./renderData";

const MARGIN_X = 40;
const MARGIN_Y = 50;

export class CoreRender {
    private _renderData!: RenderData;

    private _width: number = 0;
    private _height: number = 0;

    constructor(private container: HTMLElement,
                private _mainCanvas: HTMLCanvasElement, private _subCanvas: HTMLCanvasElement) {
        //add event handlers

        window.onresize = () => {
            this.sizes = {w: container.clientWidth, h: container.clientHeight};
            this.render();
        };

        this.sizes = {w: container.clientWidth, h: container.clientHeight};
    }

    set renderData(v: RenderData) {
        this._renderData = v;
    }

    private set sizes(sizes: {w: number, h: number}) {
        this._mainCanvas.width = sizes.w;
        this._mainCanvas.height = sizes.h;

        this._subCanvas.width = sizes.w;
        this._subCanvas.height = sizes.h;

        this._width = sizes.w;
        this._height = sizes.h;
    }

    render() {
        this.calculateCoords();

        let ctx = this._mainCanvas.getContext("2d")!;

        let points = this._renderData.points;
        //console.log({points});
        points.forEach((line) => {
            line.filter(p => p.active).forEach(point => {
                ctx.beginPath();
                ctx.arc(point.coords.x, point.coords.y, 5, 0, 2 * Math.PI);
                ctx.strokeStyle = '#000000';
                ctx.fill();
                ctx.stroke();
                ctx.fillText(`${point.value}`, point.coords.x + 10, point.coords.y);
            });
        });

        let links = this._renderData.links;
        links.filter(link => link.x.active && link.y.active).forEach(link => {
            ctx.beginPath();
            ctx.moveTo(link.x.coords.x, link.x.coords.y);
            ctx.lineTo(link.y.coords.x, link.y.coords.y);
            ctx.stroke();
        });
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
}