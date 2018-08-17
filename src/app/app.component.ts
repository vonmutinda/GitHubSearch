import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHubSearch';

 apiUrl:string='https://api.github.com'

  ngOnInit(){

    // this.http.get(this.apiUrl+'/users/'+'vonmutinda'+'/repos').subscribe(
    //   data =>{
    //     console.log(data)
    //   }
    // )
  }
  constructor(private http:HttpClient){}
}
