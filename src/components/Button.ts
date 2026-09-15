import { Component } from "../core/Components.js";

export class Button extends Component {
  render(): string {
    this._InjectStyle()
    return `
        <button id="btn">ClickMe !!</button>`;
  }

  style(): string {
    return `
        #btn {
        paddin:3px 5px;
        border-radius:1vh;
        border:1px solid black
        }`;
  }
  onMount(): void {
    document.querySelector("#btn")?.addEventListener("click", () => {
      console.log("clicked!");
    });
  }
}
