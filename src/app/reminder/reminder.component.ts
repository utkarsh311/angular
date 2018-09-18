import { Component, OnInit } from '@angular/core';
import {Reminder} from '../remnder'
import {ReminderService} from '../reminder.service';
@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
/* reminder=Reminder;
rem:Reminder;
 */
/* reminder.reminderName:'abc'; */
   reminder:Reminder={
  reminderName:'',
  reminderDescription:''
}; 
savedreminder=new Reminder();
/* name=''; */
  constructor(private reminders:ReminderService) {
  }
  onClick (rem:Reminder)
{

  this.savedreminder.reminderName=rem.reminderName;
  this.savedreminder.reminderDescription=rem.reminderDescription; 
  this.reminders.createReminder(this.savedreminder).subscribe(data=>console.log(data));
}

ngOnInit() {
  }

}
