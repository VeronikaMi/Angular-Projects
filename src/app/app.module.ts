import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoteComponent } from './note/note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewNoteComponent,
    NoteComponent,
    NotesListComponent,
    NoteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
