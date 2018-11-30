import { Injectable, OnInit } from '@angular/core';
import { ICharacter } from '../../models/character.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit{
  URL: string = "https://swapi.co/api/people/?search=&format=json";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getCharacterData(): Observable <ICharacter[]> {
    return this.http.get<ICharacter[]>(this.URL);
  }
}
