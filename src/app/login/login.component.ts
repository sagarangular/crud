import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  errormsg = ''

  constructor(private auth : AuthService){}

  login(){
    if(!this.auth.login(this.username,this.password)){
      this.errormsg = "Invalid user";
    }
  }


}
