import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note.service';
@Component({
  selector: 'app-savenote',
  templateUrl: './savenote.component.html',
  styleUrls: ['./savenote.component.css']
})
export class SavenoteComponent implements OnInit {
  panelOpenState = false;
  savednote=new Note(); 
  note:Note={
    noteContent:'',
    noteTitle:'',
    noteStatus:''
  }; 
  constructor(private notes:NoteService) { }

  submit(note:Note)
  {
    this.savednote.noteContent=note.noteContent;
    this.savednote.noteTitle=note.noteTitle;
    this.savednote.noteStatus=note.noteStatus; 
    this.notes.createNote(this.savednote).subscribe(data=>console.log(data));
  }
  ngOnInit() {
  }

}