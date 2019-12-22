import { UIComponent } from "../index";
import { Dispatcher } from "../dispatcher";
export declare class SetInput implements UIComponent {
    private _input;
    init(root: HTMLElement, dispatcher: Dispatcher): void;
    private onInput;
    private set valid(value);
    isValid(): boolean;
    value(): any;
}
