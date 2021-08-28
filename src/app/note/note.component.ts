import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note; 
  @Input() index;
  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
  }

  onDeleteNote(note){
    let id = this.notesService.notes.indexOf(note);
    this.notesService.deleteNote(note);
  }
}
