export class User {
  constructor(
    public image:any,
    public name:string,
    public email:string,
    public location:string,
    public memberSince:Date,
    public repos:number,
    public followers:number,
    public following:number,
    public url:string
  ){}
}
