import { Title } from "@angular/platform-browser";
export class Profile {
    constructor(public id:number,public avatar:string,public userName:string,public followers:number,public following:number,public dateCreated:Date,public organization:string,public hirable:string,public email:string,public blog:string){

    }
}
