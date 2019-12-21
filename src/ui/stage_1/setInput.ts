import {UIComponent} from "../index";
import {Dispatcher} from "../dispatcher";

export class SetInput implements UIComponent {

    init(root: HTMLElement, dispatcher: Dispatcher): void {
    }

    isValid(): boolean {
        return false;
    }

    value(): any {
    }
}