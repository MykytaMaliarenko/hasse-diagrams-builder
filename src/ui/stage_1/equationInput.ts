import {UIComponent} from "../index";
import {Dispatcher} from "../dispatcher";

export class EquationInput implements UIComponent {
    //private _leftSideInput: HTMLInputElement;

    //private _rightSideInput: HTMLInputElement;

    init(root: HTMLElement, dispatcher: Dispatcher): void {
    }

    isValid(): boolean {
        return false;
    }

    value(): any {
    }
}