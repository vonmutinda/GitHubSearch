import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { User } from '../user';
import { Repo } from '../repo';
import { resolve, reject } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  //PROPERTIES
  key:string = environment.access_token
  apiUrl:string = environment.apiUrl
  user:User
  repos:Repo

  user$


  // CONSTRUCTOR
  constructor(private http:HttpClient) {
    this.user = new User( "","","","",new Date(),0,0,0,0 );
    this.repos = new Repo('',0,0);
   }


  // METHODS
  userRequested(user){

    // interface expected{
    //    image:any,
    //    name:string,
    //    email:string,
    //    location:string,
    //    memberSince:Date,
    //    repos:number,
    //    gists:number,
    //    followers:number,
    //    following:number
    // }

    let promise = new Promise(
      (resolve,reject)=>{
        this.http.get(this.apiUrl+user+this.key).toPromise().then(
          data=>{
            this.user$ = data
            console.log(this.user$)
            // console.log(data[1].owner.login)

            resolve();
          },
          error=>{
            console.log(error)
          }
        )
      }
    )
    return promise
  }
}
