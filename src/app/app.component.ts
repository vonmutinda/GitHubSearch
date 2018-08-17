import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServicesService } from './http-service/services.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHubSearch';

  ngOnInit(){
  }
  constructor(private ht:ServicesService){}
}
