export abstract class Component {
  protected _element: HTMLElement | null = null;
  protected _customCSS: HTMLStyleElement | null = null;
  abstract render(): string;
  abstract style(): string;

  mount(parent: HTMLElement) {
    this._InjectStyle();
    const el = this._createElement();
    if (el) {
      parent.appendChild(el);
      this._element = el;
    }
    this.onMount();
  }

  unmount() {
    this.onUnMount();
    this._element?.remove();
    this._element = null;
  }

  onMount() {}
  onUnMount() {}

  private _createElement(): HTMLElement | null {
    const template = document.createElement("template");
    template.innerHTML = this.render().trim();
    return template.content.firstElementChild as HTMLElement;
  }
  protected  _InjectStyle(): void {
    const css = this.style().trim();
    if (!css) return;
    const key = this.constructor.name;
    if (document.querySelector(`style[data-id=${key}]`)) return;
    this._customCSS = document.createElement("style");
    this._customCSS.dataset["id"] = key;
    this._customCSS.textContent = css;
    document.head.appendChild(this._customCSS);
  }
}
