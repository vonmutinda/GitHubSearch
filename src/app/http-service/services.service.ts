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

  key:string = 'envorinment.key'
  apiUrl:string = 'environment.apiUrl'
  user:User
  repos:Repo

  user$

  dataRequest(user){
    interface expected{

    }

    let promise = new Promise(
      (resolve,reject)=>{
        this.http.get(this.apiUrl+user+this.key).toPromise().then(
          data=>{
            this.user$ = data
            console.log(data)

            resolve()
          }
        )
      }
    )
    return promise
  }

  constructor(private http:HttpClient) {
    this.user = new User( "","","","",new Date(),0,0,0,0 );
    this.repos = new Repo('',0,0);
   }




}
