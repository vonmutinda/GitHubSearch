import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../http-service/services.service'
import { request } from 'https';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[ServicesService]
})
export class HeaderComponent implements OnInit {

  ask:ServicesService


  getUsers(key){
    this.request.userRequested(key.value);
    this.request.reposRequested(key.value)
    console.log(key.value)
  }

  constructor(public request:ServicesService) { }

  ngOnInit() {
    // this.request.userRequested('vonmutinda')
  }

}
