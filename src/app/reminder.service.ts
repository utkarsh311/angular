import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Reminder} from './remnder';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor(private http:HttpClient) { }
 createReminder(savedReminder:Reminder):Observable<Reminder>
 {
    return this.http.post<Reminder>('http://localhost:8083/api/v1/reminder',savedReminder);
 }
  
}
