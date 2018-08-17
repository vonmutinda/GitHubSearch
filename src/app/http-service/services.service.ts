import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  getRepos(user){
    this.http.get(apiUrl+'/'+user+'/repos').subscribe(
      data =>{
      }
    )
  }


  getUser(){

  }


  constructor(private http:HttpClient) { }
}
