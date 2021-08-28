import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewNoteComponent } from "./new-note/new-note.component";
import { NoteEditComponent } from "./note-edit/note-edit.component";
import { NotesListComponent } from "./notes-list/notes-list.component";

const appRoutes : Routes = [
    {path:'', component:NotesListComponent}, //when using app component it doubled cause i wanted to load the same component in which i already was
    {path:'new', component: NewNoteComponent},
    {path:':id/edit', component: NoteEditComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}