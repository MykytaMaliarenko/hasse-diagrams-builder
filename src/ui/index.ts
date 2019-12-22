import {Dispatcher} from "./dispatcher";
import {EquationInput} from "./stage_1/equationInput";
import {SetInput} from "./stage_1/setInput";
import {BuildDiagramButton} from "./stage_1/buildDiagramButton";

export interface UIComponent {
    init(root: HTMLElement, dispatcher: Dispatcher): void

    isValid(): boolean

    value(): any
}

export class UI {
    public static readonly  components: Array<UIComponent> = [
        new EquationInput(),
        new SetInput(),
        new BuildDiagramButton()
    ];

    public readonly dispatcher: Dispatcher = new Dispatcher();

    constructor(private _root: HTMLElement) {
        document.getElementById("stage2")!!.hidden = true;
        UI.components.forEach((item) => {
            item.init(this._root, this.dispatcher);
        });
    }

    public showSecondStage() {
        document.getElementById("stage1")!!.hidden = true;
        document.getElementById("stage2")!!.hidden = false;
    }
}