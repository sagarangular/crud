import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:"full"},
 {path:'',component:DashboardComponent,children:[
  {path:"login",component:LoginComponent},
  {path:"user",component:UserListComponent,canActivate: [AuthService]},
  


]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
