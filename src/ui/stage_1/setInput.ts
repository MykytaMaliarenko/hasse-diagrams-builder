import {UIComponent} from "../index";
import {Dispatcher} from "../dispatcher";

const validPatterns: Array<RegExp> = [
    /(\d)+/,
    /\d+\/\d+/,
    /(\d)+\*(\d)+/,
    /*/pi\*(\d+)/,
    /pi\\(\d+)/*/
];

export class SetInput implements UIComponent {

    private _input: HTMLInputElement | null = null;

    init(root: HTMLElement, dispatcher: Dispatcher): void {
        this._input = <HTMLInputElement> document.getElementById("setInput");
        this._input.onkeydown = (e) => setTimeout(() => this.onInput(e), 100);
    }

    private onInput(e: KeyboardEvent): null {
        let value = this._input!!.value.replace(/\s/g, '');
        let objs = value.split(",");

        for (let el of objs) {
            if (validPatterns.filter((p) => el.match(p)!! && el.match(p)!![0].length == el.length).length == 0) {
                this.valid = false;
                return null;
            }
        }

        this.valid = true;
        return null;
    }

    private set valid(v: boolean) {
        if (v) {
            this._input!!.classList.remove("not-valid");
        } else if (!this._input!!.classList.contains("not-valid")) {
            this._input!!.classList.add("not-valid");
        }
    }

    isValid(): boolean {
        return !this._input!!.classList.contains("not-valid");
    }

    value(): any {
        let raw = this._input!!.value.replace(/\s/g, '').split(","),
            res = Array<number>();

        raw.forEach(el => {
           if (el.includes("*") || el.includes("/")) {
               res.push(eval(el));
           } else {
               res.push(parseFloat(el));
           }
        });

        return res;
    }
}