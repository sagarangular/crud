import { Injectable } from '@angular/core';
declare var bootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  open(id: string) {
    const modalElement = document.getElementById(id);
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  }

  close(id: string) {
    const modalElement = document.getElementById(id);
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  }
}
