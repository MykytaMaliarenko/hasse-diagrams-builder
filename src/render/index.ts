import {RenderData} from "./renderData";
import {Point} from "./point";
import {Link} from "./link";

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
        points.forEach((point) => {
            ctx.beginPath();
            ctx.arc(point.coords.x, point.coords.y, 5, 0, 2 * Math.PI);
            ctx.strokeStyle = '#000000';
            ctx.fill();
            ctx.stroke();
        });

        let links = this._renderData.links;
        //console.log({links});
        links.forEach(link => {
            ctx.beginPath();
            ctx.moveTo(link.x.coords.x, link.x.coords.y);
            ctx.lineTo(link.y.coords.x, link.y.coords.y);
            ctx.stroke();
        });
    }

    private divideIntoLines(): Array<Array<Point>> {
        let res = new Array<Array<Point>>();

        let points = this._renderData.points;

        while (true) {
            let line = new Array<Point>();

            if (res.length == 0) {
                points.forEach((point) => {
                    let links = this.getLinksWitchEndsWith(point);
                    if (links.length == 0) {
                        line.push(point);
                    }
                })
            } else {
                let prevLine = res[res.length - 1];
                prevLine.forEach((point) => {
                    let links = this.getLinksWitchStartsWith(point);
                    links.forEach(link => {
                        let t = line.filter(l => l.eq(link.y));
                        if (t.length === 0)
                            line.push(link.y)
                    })
                })
            }

            if (line.length != 0)
                res.push(line);
            else
                break
        }

        return res;
    }

    private getLinksWitchStartsWith(p: Point): Array<Link> {
        let links = this._renderData.links;
        let res = new Array<Link>();

        links.forEach((link) => {
            if (link.x.eq(p)) {
                res.push(link)
            }
        });

        return res
    }

    private getLinksWitchEndsWith(p: Point): Array<Link> {
        let links = this._renderData.links;
        let res = new Array<Link>();

        links.forEach((link) => {
            if (link.y.eq(p)) {
                res.push(link)
            }
        });

        return res
    }

    private calculateYStep(numOfLines: number): number {
        return this._height / numOfLines
    }

    private calculateXStep(numOfPoints: number): number {
        return this._width / numOfPoints
    }

    private calculateCoords() {
        let lines = this.divideIntoLines();
        let yStep = this.calculateYStep(lines.length);

        //console.log({lines});

        lines.forEach((line, lineIndex) => {
            let xStep = this.calculateXStep(line.length),
                y = this._height - lineIndex * yStep - 50;

            line.forEach((point, index) => {
                point.coords.x = xStep * index + 50;
                point.coords.y = y;
            })
        })
    }
}