import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteComponent } from './delete/delete.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import {NgModel, FormsModule, NgForm} from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InstitutePersonDashboardComponent } from './institute-person-dashboard/institute-person-dashboard.component';
import { InstChangePasswordComponent } from './inst-change-password/inst-change-password.component';
import { InstEditProfileComponent } from './inst-edit-profile/inst-edit-profile.component';
import { StuEditProfileComponent } from './stu-edit-profile/stu-edit-profile.component';
import { StuChangePasswordComponent } from './stu-change-password/stu-change-password.component';
import { ShowTestComponent } from './show-test/show-test.component';
//import { TakeTestComponent } from './take-test/take-test.component';
import { StuTestHistoryComponent } from './stu-test-history/stu-test-history.component';
import { StuShowReportComponent } from './stu-show-report/stu-show-report.component';
import { LatestResultComponent } from './latest-result/latest-result.component';
import { AdminEditProfileComponent } from './admin-edit-profile/admin-edit-profile.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { TakeTestComponent } from './take-test/take-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    EditComponent,
    ContactComponent,
    DeleteComponent,
    RegisterComponent,
    NotfoundComponent,
    LoginComponent,
    StudentDashboardComponent,
    AdminDashboardComponent,
    InstitutePersonDashboardComponent,
    StuEditProfileComponent,
    StuChangePasswordComponent,
    InstChangePasswordComponent,
    InstEditProfileComponent,
    ShowTestComponent,
    TakeTestComponent,
    StuTestHistoryComponent,
    StuShowReportComponent,
    LatestResultComponent,
    AdminEditProfileComponent,
    AdminChangePasswordComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
  // { path: "", component: HomeComponent , canActivate:[AuthService]}, 
   { path: "home", component: HomeComponent  , canActivate:[AuthService]},
     { path: "register", component: RegisterComponent},
     { path: "edit/:No", component: EditComponent  , canActivate:[AuthService]},
     { path: "delete/:No", component: DeleteComponent , canActivate:[AuthService] },
     { path: "about", component: AboutusComponent },
     { path: "contact", component: ContactComponent },
     { path: "login", component: LoginComponent },
     { path:'home',component:HomeComponent,children:[ {path: 'studentDashboard',component:StudentDashboardComponent}],canActivate:[AuthService]},
     { path:'home',component:HomeComponent,children:[ {path: 'studentEditProfile',component:StuEditProfileComponent}],canActivate:[AuthService]},
     { path:'home',component:HomeComponent,children:[ {path: 'studentChangePassword',component:StuChangePasswordComponent}],canActivate:[AuthService]},
     { path:'home',component:HomeComponent,children:[ {path: 'studentShowTest',component:ShowTestComponent}],canActivate:[AuthService]},
     { path:'home',component:HomeComponent,children:[ {path: 'studentTakeTest/:No',component:TakeTestComponent}],canActivate:[AuthService]},
     { path:'home',component:HomeComponent,children:[ {path: 'latestResult',component:LatestResultComponent}],canActivate:[AuthService]},
     //{ path: 'studentTakeTest/:No',component:StudentDashboardComponent},
     { path:'home',component:HomeComponent,children:[ {path: 'studentTakeHistory',component:StuTestHistoryComponent}],canActivate:[AuthService]},
     { path:'home',component:HomeComponent,children:[ {path: 'studentShowReport',component:StuShowReportComponent}],canActivate:[AuthService]},
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     { path:'home',component:HomeComponent,children:[ {path: 'adminDashboard',component:AdminDashboardComponent}],canActivate:[AuthService]},
     { path:'home',component:HomeComponent,children:[ {path: 'adminChangePassword',component:AdminChangePasswordComponent}],canActivate:[AuthService]},
     { path:'home',component:HomeComponent,children:[ {path: 'adminEditProfile',component:AdminEditProfileComponent}],canActivate:[AuthService]}, 
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     { path:'home',component:HomeComponent,children:[ {path: 'instutiteEditProfile',component:InstEditProfileComponent}],canActivate:[AuthService]},
     { path:'home',component:HomeComponent,children:[ {path: 'instutiteChangePassword',component:InstChangePasswordComponent}],canActivate:[AuthService]},
     { path:'home',component:HomeComponent,children:[ {path: 'institutePersonDashboard',component:InstitutePersonDashboardComponent}],canActivate:[AuthService]},
     { path: "**", component: HomeComponent,canActivate:[AuthService] }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  constructor()
  {
    console.log("App Module Created");
  }
}