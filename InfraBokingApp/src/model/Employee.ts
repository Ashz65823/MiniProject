import { Role } from "./Role";

export class Employee{
    constructor(public id:number,public email:string,public password:string,public roles:Role[]){
    }
}