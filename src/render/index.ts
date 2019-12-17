import {RenderData} from "./renderData";

const MARGIN_X = 40;
const MARGIN_Y = 50;

export class CoreRender {
    private _renderData!: RenderData;

    private _width: number;
    private _height: number;

    constructor(private container: HTMLElement,
                private _mainCanvas: HTMLCanvasElement, private _subCanvas: HTMLCanvasElement) {
        //add event handlers

        window.onresize = () => {
            _mainCanvas.width = container.clientWidth;
            _mainCanvas.height = container.clientHeight;

            this._width = _mainCanvas.width;
            this._height = _mainCanvas.height;

            this.render();
        };

        _mainCanvas.width = container.clientWidth;
        _mainCanvas.height = container.clientHeight;

        this._width = _mainCanvas.width;
        this._height = _mainCanvas.height;
    }

    set renderData(v: RenderData) {
        this._renderData = v;
    }

    render() {
        this.calculateCoords();

        let ctx = this._mainCanvas.getContext("2d")!;

        let points = this._renderData.points;
        //console.log({points});
        points.forEach((line) => {
            line.forEach(point => {
                ctx.beginPath();
                ctx.arc(point.coords.x, point.coords.y, 5, 0, 2 * Math.PI);
                ctx.strokeStyle = '#000000';
                ctx.fill();
                ctx.stroke();
                ctx.fillText(`${point.value}`, point.coords.x + 10, point.coords.y);
            });
        });

        let links = this._renderData.links;
        links.forEach(link => {
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