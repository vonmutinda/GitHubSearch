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
        if($key.target.value==''){
          
        }else{
          this.request.userRequested($key.target.value);
          this.request.reposRequested($key.target.value)
        }


        console.log($key.target.value)
      }

  ngOnInit() {
    this.request.userRequested('vonmutinda');
    this.request.reposRequested('vonmutinda')
  }

}
