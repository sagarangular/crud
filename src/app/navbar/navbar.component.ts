import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private modalService: ModalService) { }

  openModal() {
    this.modalService.open('myModal');
  }
}
