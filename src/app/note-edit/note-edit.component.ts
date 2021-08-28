import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  title :string;
  body:string;
  index:number;

  constructor(private notesService:NotesService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((
      params:Params) =>{
        this.index = params['id'];
      }
    )
    if(this.notesService.inFilteredArray){
      this.title = this.notesService.filteredNotes[this.index].title;
      this.body = this.notesService.filteredNotes[this.index].description;
    }
    else{
      this.title = this.notesService.notes[this.index].title;
      this.body = this.notesService.notes[this.index].description;
    }
   
  }

  onSaveNote(){
    if(this.notesService.inFilteredArray){
      this.notesService.editNote(this.notesService.filteredNotes[this.index],this.title, this.body);
    }
    else{
      this.notesService.editNote(this.notesService.notes[this.index],this.title, this.body);

    }
    this.router.navigate(['/']);
    this.notesService.inFilteredArray = false;
  }
}
