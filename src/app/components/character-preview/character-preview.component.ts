import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './../../services/modal/modal.service';

@Component({
  selector: 'app-character-preview',
  templateUrl: './character-preview.component.html',
  styleUrls: ['./character-preview.component.scss']
})
export class CharacterPreviewComponent implements OnInit {
  showModal: boolean = true;
  @Input() character;

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  closeDetails() {
    this.showModal = false;
    // UPDATE MODAL SERVICE TOGGLE VALUE;
    this.modalService.toggleModal(this.showModal);
    // ENABLE SCROLLING BACK ON THE PAGE WHEN MODAL IS CLOSED
    document.body.classList.remove("modal-active");
  }
} 
