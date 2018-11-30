import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterTableComponent } from './components/character-table/character-table.component';
import { CharacterPreviewComponent } from './components/character-preview/character-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './services/character/character.service';
import { ModalService } from './services/modal/modal.service';


@NgModule({
  declarations: [
    AppComponent,
    CharacterTableComponent,
    CharacterPreviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CharacterService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
