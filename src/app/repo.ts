import { Title } from "@angular/platform-browser";
export class Repo {
    constructor(public rName:string,public rblob:string, public description:string,public forks:number,public size:number,public push:Date,public visibility:string,public watcher:number){

    }
}
