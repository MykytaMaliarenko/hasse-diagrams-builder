import {DiagramAPI} from "./api/diagramsAPI";
import {CoreRender} from "./render";

import "./styles/index.sass"
import {UI} from "./ui";
import {ACTION_GO_TO_RENDER} from "./ui/actions";

window.onload = () => {
    let ui = new UI(document.body);
    ui.dispatcher.on(ACTION_GO_TO_RENDER, async (data: {equation: string, set: Array<number>}) => {
        ui.showSecondStage();
        let renderData = await DiagramAPI.buildDiagram(data.equation, data.set),
            container = document.getElementById("stage2")!!,
            mainCanvas = <HTMLCanvasElement> document.getElementById("mainCanvas")!!,
            subCanvas = <HTMLCanvasElement> document.getElementById("subCanvas")!!;

        let coreRender = new CoreRender(container, mainCanvas, subCanvas);
        coreRender.renderData = renderData!;
        coreRender.render();
    });
};