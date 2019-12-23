import {DiagramAPI} from "./api/diagramsAPI";
import {CoreRender} from "./render";

import "./styles/index.sass"


window.onload = async () => {
    document.getElementById("stage1")!.setAttribute("style", "display: none");

    let container = document.getElementById("stage2")!,
        mainCanvas = <HTMLCanvasElement> document.getElementById("mainCanvas")!,
        subCanvas = <HTMLCanvasElement> document.getElementById("subCanvas")!;

    let renderData = await DiagramAPI.buildDiagram("x^2 >= y^2", [0, -1, 1, -2, 2, 3]);

    let coreRender = new CoreRender(container, mainCanvas, subCanvas);
    coreRender.renderData = renderData!!;
    coreRender.render();
};