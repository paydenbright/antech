import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  showModal: boolean;

  constructor() { }

  toggleModal(bool) {
    if(bool) {
      this.showModal= true;
    }
    else { 
      this.showModal = false;
    }
    
    return this.showModal;
  }
}
