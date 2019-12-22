import {UI, UIComponent} from "../index";
import {Dispatcher} from "../dispatcher";
import {EquationInput} from "./equationInput";
import {SetInput} from "./setInput";
import {ACTION_GO_TO_RENDER} from "../actions";

export class BuildDiagramButton implements UIComponent {

    private _button: HTMLButtonElement | null = null;

    private _dispatcher: Dispatcher | null = null;

    init(root: HTMLElement, dispatcher: Dispatcher): void {
        this._button = <HTMLButtonElement> document.getElementById("buildDiagramButton");
        this._button.onclick = () => this.onClick();

        this._dispatcher = dispatcher;
    }

    private onClick() {
        let components = UI.components,
            setInput = <SetInput> components.filter((comp) => comp instanceof SetInput)[0],
            equationInput = <EquationInput> components.filter((comp) => comp instanceof EquationInput)[0];

        if (setInput.isValid() && equationInput.isValid()) {
            let data = {
                equation: equationInput.value(),
                set: setInput.value()
            };
           this._dispatcher!!.emit(ACTION_GO_TO_RENDER, data);
        }
    }

    isValid(): boolean {
        return false;
    }

    value(): any {
    }

}