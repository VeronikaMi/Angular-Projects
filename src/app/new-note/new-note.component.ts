import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../note.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  title :string;
  body:string;
  newNote :Note;

  constructor(private notesService:NotesService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveNote(){
    console.log(this.title);
    console.log(this.body);

    if((this.title === undefined || this.title === "") && (this.body === undefined || this.body === "")){
      alert("please fill out the fields");
      //can add some class , smth like red text under the input field to show the requirement
    }
    else if((this.title === undefined || this.title === "") || (this.body === undefined || this.body === "")){
      alert("please fill out all the fields");
      //same here |
    }
    else{
      this.newNote = new Note(this.title, this.body);
      this.notesService.addNote(this.newNote);
      this.router.navigate(['/']);
    }

    
  }



}
