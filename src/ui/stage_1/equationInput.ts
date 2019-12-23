import {UIComponent} from "../index";
import {Dispatcher} from "../dispatcher";

export class EquationInput implements UIComponent {
    private _leftSideInput: HTMLInputElement | null = null;

    private _rightSideInput: HTMLInputElement | null = null;

    private _operationSelect: HTMLSelectElement | null = null;

    init(root: HTMLElement, dispatcher: Dispatcher): void {
        this._leftSideInput = <HTMLInputElement> document.getElementById("leftEquationInput");
        this._rightSideInput = <HTMLInputElement> document.getElementById("rightEquationInput");
        this._operationSelect = <HTMLSelectElement> document.getElementById("operationSelect");
    }

    isValid(): boolean {
        return true;
    }

    private get operation(): string {
        let operation = this._operationSelect!.value.replace(/\s/g, '');
        switch (operation) {
            case ":":
                operation = "::";
                break;

            case "=>":
                operation = ">=";
                break
        }

        return operation;
    }

    value(): any {
        return this._leftSideInput!!.value.replace(/\s/g, '') + this.operation +
            this._rightSideInput!!.value.replace(/\s/g, '')
    }
}