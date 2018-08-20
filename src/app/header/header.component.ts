import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../http-service/services.service'
// import { request } from 'https';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(public request:ServicesService) { }

      getUsers($key){
        this.request.userRequested($key.target.value);
        this.request.reposRequested($key.target.value)
        console.log($key.target.value)
      }

  ngOnInit() {
  }

}
