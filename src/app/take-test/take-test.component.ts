import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {

  flag:number;
  questions:any;
  student:any;
  questionNo:any;
  options:any[];
  public init2:number =600;
  public counter:number = 0;
  public seconds:number = 0;
   


  constructor(private service:DataService,private route: ActivatedRoute,private router:Router) 
  {
    console.log("Inside Take Test");
    this.student = JSON.parse(window.sessionStorage.getItem("currentUser"));
    console.log("Id is : "+this.student.sid);
    this.questionNo = 0;
    this.flag=0;
  }

  ngOnInit() {
    this.startCoundown();
    
    this.route.paramMap.subscribe((result)=>
    {
      let no = result.get("No");
      this.service.GetQuestions(no).subscribe((data)=>{
        this.questions = data;
        console.log(this.questions);
      })
    })
  }
  Evaluate(myForm)
  {
  
    console.log("Inside Evaluate"); 
   // this.seconds = 0; 
    this.flag = 1;
    console.log(myForm);
    console.log(myForm.form.value);
    //this.router.navigate(["/home/latestResult"]);
    

  }


  ///////////////////////////////////////////////////////////////////////////////////////////
  startCoundown()
  {
    if(this.init2 && this.init2 >0)
    {
      //this.counter = this.init;
      this.seconds = this.init2;
      console.log(this.displayTimeElapsed());
      this.doCountdown();
    }
  }
  doCountdown(){
    setTimeout(()=>{
       // this.counter = this.counter-1;
        this.seconds = this.seconds-1;
        this.processCountDown();
    },1000);
  }
  processCountDown()
  {
    //console.log(this.counter)
    if( this.seconds == 0)
    {
      if(this.flag == 0)
      {
        alert("Exam Submitted!!");
        this.router.navigate(["/home/studentDashboard"]);
      }
    
    }
    else
    {
       
      this.displayTimeElapsed();
      this.doCountdown();
    }
  }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  Answer(value)
  {
      console.log("Value is "+value);
  }


}
