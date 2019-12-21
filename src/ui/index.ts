import {Dispatcher} from "./dispatcher";
import {EquationInput} from "./stage_1/equationInput";
import {SetInput} from "./stage_1/setInput";

export interface UIComponent {
    init(root: HTMLElement, dispatcher: Dispatcher): void

    isValid(): boolean

    value(): any
}

export class UI {
    public static readonly  components: Array<UIComponent> = [
        new EquationInput(),
        new SetInput(),
    ];

    public readonly dispatcher: Dispatcher = new Dispatcher();

    constructor(private _root: HTMLElement) {
        UI.components.forEach((item) => {
            item.init(this._root, this.dispatcher)
        });
    }

    private initSecondStage() {

    }
}