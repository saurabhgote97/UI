import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  emps: any;
  user:any;
  constructor(private service: DataService, private router:Router) 
  {
    console.log("Home Component Created");
  }
  
  ngOnInit() {
    this.user = JSON.parse(window.sessionStorage.getItem("currentUser"));
    console.log("user is " + this.user.stuName);
  }

  GoToRegister()
  {
    this.router.navigate(['/register']);
  }
  
  ngOnDestroy()
  {
    console.log("Home component destroyed..");
  }

}









