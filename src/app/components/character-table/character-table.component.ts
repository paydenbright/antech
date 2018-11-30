import { Component, OnInit } from '@angular/core';
import { CharacterService } from './../../services/character/character.service';
import { ICharacter } from 'src/app/models/character.model';
import { ModalService } from './../../services/modal/modal.service';

@Component({
  selector: 'app-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss']
})
export class CharacterTableComponent implements OnInit {
  characters: ICharacter[];
  tableHeader: any[];
  showModal: boolean = false;
  currentCharacter;

  constructor(private characterService: CharacterService, public modalService: ModalService) {}

  ngOnInit() {
    this.setProps();

    // GET CHARACTER DATA
    this.characterService.getCharacterData()
    .subscribe((data: ICharacter[]) =>  {
      // SET DATA TO LOCAL VARIABLE 
       this.characters = data["results"];
     });
  }

  setProps() {
    // SET TABLE HEADERS FOR CHARACTER TABLE
    this.tableHeader = [
      {
        value: "",
      },
      {
        value: "#",
      },
      {
        value: "Name",
      },
      {
        value: "Gender",
      },
      {
        value: "Films",
      },
    ]
  }

  viewDetails(index) {
    this.showModal = true;
    // UPDATE MODAL SERVICE TOGGLE VALUE;
    this.modalService.toggleModal(this.showModal);
    // PASS CURRENT CHARACTER TO CHILD COMPONENT "chacter-preview"
    this.currentCharacter = this.characters[index];
    // DISABLE SCROLLING IN BACKGROUND WHILE MODAL IS ACTIVE
    document.body.classList.add("modal-active");
  }
}