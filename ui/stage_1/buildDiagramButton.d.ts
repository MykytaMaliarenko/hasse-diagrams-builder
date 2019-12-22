import { UIComponent } from "../index";
import { Dispatcher } from "../dispatcher";
export declare class BuildDiagramButton implements UIComponent {
    private _button;
    private _dispatcher;
    init(root: HTMLElement, dispatcher: Dispatcher): void;
    private onClick;
    isValid(): boolean;
    value(): any;
}
