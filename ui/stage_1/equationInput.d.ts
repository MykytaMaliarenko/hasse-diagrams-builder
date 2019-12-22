import { UIComponent } from "../index";
import { Dispatcher } from "../dispatcher";
export declare class EquationInput implements UIComponent {
    private _leftSideInput;
    private _rightSideInput;
    private _operationSelect;
    init(root: HTMLElement, dispatcher: Dispatcher): void;
    isValid(): boolean;
    private get operation();
    value(): any;
}
