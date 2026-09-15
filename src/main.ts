import { HomePage } from "./page/HomePage.js"

const root=document.querySelector("#root") as HTMLElement | null

if(!root){
    throw new Error("root doesn't exists!")
}

const app=new HomePage()

app.mount(root)