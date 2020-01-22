import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate
{
  user:any;
  credentialsDetails:any;
  flag:any ;
  baseUrl = "http://localhost:9090/AOnlineExaminationSystemProject/";
  constructor(private router:Router,private service:DataService,private helper:HttpClient) {
    this.credentialsDetails ={
      "email":"AS",
      "password":"SA"
    };
   }

////////////////////////////////////////////////////////////////////////////////////////////////////
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
   if(this.IsLoggedIn())
   {
     console.log("User Has Logged in");
     return true;
   }
   else
   {
    console.log("User Has not Logged in");
     this.router.navigate(['/login']);
     return false;  
   }
  }

////////////////////////////////////////////////////////////////////////////////////////////////////
  IsLoggedIn()
  {
    
    if(window.sessionStorage.getItem("isActive")!=null 
        && 
       window.sessionStorage.getItem("isActive")=="1")
    {
      // some logic to check if person has logged in
      return true;
    }
    else{
      return false;
    }
  }

////////////////////////////////////////////////////////////////////////////////////////////////////
  CheckCredentialsWithDB(credentials)
  {
    //Call Some  Service using Post Method
    //to check credentials with DB 
    console.log("Inside CheckCredentialsWithDB");
    console.log(credentials.UserName);
    console.log(credentials.Password);
    console.log(credentials.role);
    console.log(this.credentialsDetails);
    this.credentialsDetails.email = credentials.UserName;
    this.credentialsDetails.password = credentials.Password;
    /**     if(credentials.role == "Student")
      {
      //this.service.StudentLogin(this.credentialsDetails).subscribe((data)=>{
      this.StudentLogin(this.credentialsDetails).subscribe((result)=>{
        console.log(result);
      })
    }
    else if(credentials.role == "Admin")
    {
      this.AdminLogin(this.credentialsDetails).subscribe((result)=>{
        console.log(result);
        this.user = result;
      })
    }
    else
    {
      this.InstutitePersonLogin(this.credentialsDetails).subscribe((result)=>{
        console.log(result);
        this.user = result;
      })
    }*/
    if(credentials.role == "Student")
      {
      //this.service.StudentLogin(this.credentialsDetails).subscribe((data)=>{
      this.user = this.StudentLogin(this.credentialsDetails);
    }
    else if(credentials.role == "Admin")
    {
      this.user = this.AdminLogin(this.credentialsDetails);
    }
    else
    {
      this.user =this.InstutitePersonLogin(this.credentialsDetails);
    }
    
    this.user.subscribe((data)=>{
      console.log(data);
      console.log("Email is  "+data.email);
      if(data.email == credentials.UserName && data.password == credentials.Password)
      {
        console.log("Inside Auth Subscribe : " + data);  
        window.sessionStorage.setItem("currentUser",JSON.stringify(data));
        window.sessionStorage.setItem("isActive", "1");
        this.router.navigate(['/home']); 
      }
      else
      {
       return false;    
      }
    });
   console.log("this.Flag "+ this.flag);
      return false;
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  StudentLogin(credentials)
  {
    console.log("inside StudentLogin : "+credentials.email)
    console.log("inside StudentLogin : "+credentials.password);
    console.log("inside StudentLogin : "+credentials);
    return  this.helper.post(this.baseUrl+"student/login",credentials);
  }
  AdminLogin(credentials)
  {
    console.log("inside AdminLogin : "+credentials.email)
    console.log("inside AdminLogin : "+credentials.password);
    console.log("inside AdminLogin : "+credentials);
    return  this. helper.post(this.baseUrl+"admin/login",credentials);
  }
  InstutitePersonLogin(credentials)
  {
    console.log("inside InstitutePersonLogin : "+credentials.email)
    console.log("inside InstitutePersonLogin : "+credentials.password);
    console.log("inside InstitutePersonLogin : "+credentials);
    return  this.helper.post(this.baseUrl+"institutePerson/login",credentials);
  }


////////////////////////////////////////////////////////////////////////////////////////////////////

  Logout()
  {
    window.sessionStorage.setItem("isActive", "0");
    this.router.navigate(['/login']);
  }

}



