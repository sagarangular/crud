import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
 {path:'dashboard',component:DashboardComponent,canActivate: [AuthService],children:[
  {path:"user",component:UserListComponent},
  {path:"view/:id",component:ViewdetailsComponent}
]},
{path:'',redirectTo:"/login",pathMatch:"full"},
{path:'**',redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
