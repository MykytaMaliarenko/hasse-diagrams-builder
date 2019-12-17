import {state, STATE_STAGE1, STATE_STAGE2, STATE_LOADING} from "./state";
import {datasetValidate, equationValidate} from "./validators";
import {DiagramAPI} from "./api/diagramsAPI";
import {CoreRender} from "./render";

import "./styles/index.sass"

const APP_STATE: state = STATE_STAGE1;

window.onload = () => {
    let equationInput = document.getElementById("equationInput")!!;
    equationInput.oninput = onEquationInput(equationInput);

    let dataSetInput = document.getElementById("setInput")!!;
    dataSetInput.oninput = onDataSetInput(dataSetInput);

    let buildButton = document.getElementById("buildButton");
    if (buildButton) {
        buildButton.onclick = async () => {
            //add parsing and getting data from user input
            let equation: string = "",
                dataset: Array<number> = [];

            if (datasetValidate(dataset) && equationValidate(equation)) {
                let renderData = await DiagramAPI.buildDiagram(equation, dataset),
                    container = document.getElementById("stage2")!!,
                    mainCanvas = <HTMLCanvasElement> document.getElementById("mainCanvas")!!,
                    subCanvas = <HTMLCanvasElement> document.getElementById("subCanvas")!!;

                let coreRender = new CoreRender(container, mainCanvas, subCanvas);
                coreRender.renderData = renderData!;
                coreRender.render();
            } else {
                //notify user that input is wrong
            }
        };
    }

};

const onEquationInput = (input: HTMLElement): any => {

};

const onDataSetInput = (input: HTMLElement): any => {

};