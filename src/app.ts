import {state, STATE_STAGE1, STATE_STAGE2, STATE_LOADING} from "./state";
import {datasetValidate, equationValidate} from "./validators";
import {DiagramAPI} from "./api/diagramsAPI";

const APP_STATE: state = STATE_STAGE1;

window.onload = () => {
    console.log("Hello world");

    let equationInput = document.getElementById("equationInput");
    if (equationInput) {
        equationInput.oninput = onEquationInput(equationInput);
    }

    let dataSetInput = document.getElementById("setInput");
    if (dataSetInput) {
        dataSetInput.oninput = onDataSetInput(dataSetInput);
    }

    let buildButton = document.getElementById("buildButton");
    if (buildButton) {
        buildButton.onclick = async () => {
            let equation: string = "",
                dataset: Array<number> = [];

            if (datasetValidate(dataset) && equationValidate(equation)) {
                let renderData = await DiagramAPI.calculateDiagram(equation, dataset);
            }
        };
    }

};

const onEquationInput = (input: HTMLElement): any => {

};

const onDataSetInput = (input: HTMLElement): any => {

};