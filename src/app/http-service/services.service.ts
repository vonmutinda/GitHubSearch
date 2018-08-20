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

  repos$ //repos object


  // CONSTRUCTOR
  constructor(private http:HttpClient) {
   }


  // METHODS
  userRequested(user){

    interface expected{
      avatar_url:any,
      login:string,
      email:string,
      location:string,
      created_at:Date,
      public_repos:number,
      followers:number,
      following:number,
      html_url:string
    }

    let promise = new Promise(
      (resolve,reject)=>{
        this.http.get<expected>(this.apiUrl+user+this.key).toPromise().then(
          data=>{
            this.user = new User(
              data.avatar_url,
              data.login,
              data.email,
              data.location,
              data.created_at,
              data.public_repos,
              data.followers,
              data.following,
              data.html_url
            )

            // console.log(this.user)
            console.log(data)

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



  // request for repos
  reposRequested(user){

    interface expected{
       name:string,
       forks:number,
       watcher:number
    }

    let promise = new Promise(
      (resolve,reject)=>{
        this.http.get(this.apiUrl+user+'/repos'+this.key).toPromise().then(
          data=>{
            // console.log(data[0])
            // for(let i = 0 ; i<=30 ; i++){
            //   this.repos.push(this.repo = new Repo(data[i].name , data[i].forks, data[i].watcher))
            //   // console.log(data[i])
            //   console.log(this.repos)
            // }
            // console.log(this.repos)

            this.repos$ = data
            console.log(this.repos$)

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
