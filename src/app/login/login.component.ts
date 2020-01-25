import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message;
  constructor(private service: AuthService, private router: Router) 
  {

  }

  ngOnInit() 
  {
  }

  SignIn(loginForm)
  {
    console.log("Inside Sign In");
    let loginCredentials = loginForm.form.value;
    console.log(loginCredentials);

    let isUserValid= this.service.CheckCredentialsWithDB(loginCredentials);
    console.log("IsUserValid "+isUserValid);
    if(isUserValid)
    {
      console.log("User Is Valid");
      
     
    }
    else{
      console.log("User Name / Password is Invalid!");
      this.message = "User Name / Password is Invalid!";
    }
  }
  Register()
  {
    console.log("inside Register");
    this.router.navigate(["/register"]); 
  }
}





