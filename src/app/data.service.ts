import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  credentialsDetails:any;

  //constructor(private helper: HttpClient) 
  constructor(private helper: HttpClient) 
  { 
    console.log("Data Service Object Created");
  }

  SelectByNo(No)
  {
    return;
  }
  Select()
  {
    return  this.helper.get("http://localhost:9898/emps");
  }
  GetTestById(No)
  {
    return this.helper.get("http://localhost:8080/AOnlineExaminationSystemProject/student/testList/"+No);
  }

  GetQuestions(No)
  {
    return  this.helper.get("http://localhost:8080/AOnlineExaminationSystemProject/test/listQuestion/"+No );
  }

  Insert(empObj)
  {
  return  this.helper.post("http://localhost:9898/emps",empObj);
  }

  Update(empObj)
  {
   return this.helper.put("http://localhost:9898/emps/" + empObj.No ,empObj);
  }

  Delete(No)
  {
    return  this.helper.delete("http://localhost:9898/emps/" + No );
  }

  //For UT Check
  Add(x, y)
  {
    return x+y;
  }

}




