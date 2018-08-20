import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../http-service/services.service';
// import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ServicesService]
})
export class ProfileComponent implements OnInit {

  constructor(public request:ServicesService) { }

  // getUsers(key){
  //   this.request.userRequested(key.value);
  //   this.request.reposRequested(key.value)
  //   console.log(key.value)
  // }


  ngOnInit() {

  }

}
