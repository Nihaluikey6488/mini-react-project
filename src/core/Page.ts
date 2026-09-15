import { Component } from "./Components.js";

export abstract class Page extends Component{
   override onMount(): void {
        this.onPageReady()
    }
    onUnMount(): void {
        
    }

    onPageReady(){

    }
}