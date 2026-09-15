import { Button } from "../components/Button.js";
import { Page } from "../core/Page.js";

export class HomePage extends Page{
    private _button=new Button()
    render(): string {
        return  `<div>
        <h1>hello world!</h1>
        ${this._button.render()}
        </div> `
    }
    style(): string {
        return  ``
    }
    onPageReady(): void {
        this._button.onMount()
    }
}