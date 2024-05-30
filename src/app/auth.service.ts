import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  loggedIn:boolean = false;
  constructor(private router:Router) { }

  login(username:string,password:string){
    if(username=="admin"&& password=="admin"){
      this.loggedIn=true;
      this.router.navigate(["/dashboard/user"]);
      return true;
    }
    return false;
  }

  isLoggedIn():boolean{
    return this.loggedIn;
  }
logOut(){
  this.loggedIn = false;
  this.router.navigate(["login"]);
}

canActivate() : boolean {
  if(this.loggedIn){
    return true
  }else{
    this.router.navigate(['login'])
    return false
  }

}

}
