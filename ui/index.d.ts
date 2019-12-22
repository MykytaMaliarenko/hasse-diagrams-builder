import { Dispatcher } from "./dispatcher";
export interface UIComponent {
    init(root: HTMLElement, dispatcher: Dispatcher): void;
    isValid(): boolean;
    value(): any;
}
export declare class UI {
    private _root;
    static readonly components: Array<UIComponent>;
    readonly dispatcher: Dispatcher;
    constructor(_root: HTMLElement);
    showSecondStage(): void;
}
