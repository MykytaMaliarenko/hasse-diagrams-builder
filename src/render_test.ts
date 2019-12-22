import {DiagramAPI} from "./api/diagramsAPI";
import {CoreRender} from "./render";

import "./styles/index.sass"


window.onload = async () => {
    document.getElementById("stage1")!.setAttribute("style", "display: none");

    let container = document.getElementById("stage2")!,
        mainCanvas = <HTMLCanvasElement> document.getElementById("mainCanvas")!,
        subCanvas = <HTMLCanvasElement> document.getElementById("subCanvas")!;

    let renderData = await DiagramAPI.buildDiagram("xmod(4) > ymod(4)", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    let coreRender = new CoreRender(container, mainCanvas, subCanvas);
    coreRender.renderData = renderData!!;
    coreRender.render();
};