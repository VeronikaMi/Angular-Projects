import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes:Note[] = [
    new Note("one", "one desc"),
    new Note("one two", "one two desc"),
    new Note("one two three", "one two three description"),
    new Note("test", "test desc"),
    new Note("nika", "asdfghjkl;"),
  ];

  inFilteredArray: boolean = false;

  filteredNotes:Note[] = [];

  constructor() { }

  addNote(note:Note){
    this.notes.push(note);
  }

  deleteNote(note){
    let id: number = this.notes.indexOf(note);
    
    if(this.inFilteredArray){
      let idF: number = this.filteredNotes.indexOf(note);
      this.filteredNotes.splice(idF, 1);
      this.notes.splice(id,1);
    }
    else{
      this.notes.splice(id,1);
    }
    
  }

  editNote(note:Note, title:string, body:string){
    let id: number = this.notes.indexOf(note);
    if(this.inFilteredArray){
      let idF: number = this.filteredNotes.indexOf(note);
      this.filteredNotes[idF].title = title;
      this.filteredNotes[idF].description = body;
      this.notes[id].title = title;
      this.notes[id].description = body;
    }
    else{
      this.notes[id].title = title;
      this.notes[id].description = body;
    }
    
  }

}
