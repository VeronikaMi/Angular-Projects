import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../note.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes:Note[] = [];
  searchString:string;
  delete: boolean = false;
  
  constructor(private router:Router,
              private notesService: NotesService){}

  ngOnInit(){
    this.notes = this.notesService.notes;
    this.notesService.filteredNotes = this.notes;
  }

  onAddNote(){
    this.router.navigate(['/new']);
  }

  onEditNote(note){
    let index = this.notes.indexOf(note);
    this.router.navigate([index,'edit']);
  }

  onFilter(){
    this.notesService.inFilteredArray = true;
    this.notes = this.notesService.notes;
    this.searchString = this.searchString.toLowerCase().trim();
    let words: string[] = this.searchString.split(' ');
    words = this.deleteDuplicates(words);

    words.forEach(word =>{
      this.notesService.filteredNotes = this.notes.filter(note => {
        if(note.title.toLowerCase().includes(word)){
          return true;
        }
        else{
          return false;
        }
      })
    })
    this.notes = this.notesService.filteredNotes;

  }

  deleteDuplicates(arr:Array<any>): Array<any>{
    let uniquWords: Set<any> = new Set<any>();
    arr.forEach(e => uniquWords.add(e));
    return Array.from(uniquWords);
  }

}
