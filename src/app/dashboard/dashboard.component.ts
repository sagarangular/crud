import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   constructor(private modalService: ModalService,public router:Router,public auth:AuthService) { }
  //  openModal(modalId: string) {
  //   this.modalService.open(modalId);
  // } 
  btnClick () {
    this.router.navigateByUrl('/login');
}
logout() {
  this.auth.logOut();
}
}
