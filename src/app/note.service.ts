import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Note} from './note';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

//private baseUrl='http://localhost:8082/api/v1/note';
  constructor(private http:HttpClient) { }

createNote(savednote:Note):Observable<Note>
{
  return this.http.post<Note>('http://localhost:8084/api/v1/note',savednote);
}
}
