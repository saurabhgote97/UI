import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  student:any;
  constructor() 
  {
  this.student = JSON.parse(window.sessionStorage.getItem("currentUser"));
    console.log(this.student);
  }

  ngOnInit() {
  }

}
