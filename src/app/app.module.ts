import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SavenoteComponent } from './savenote/savenote.component';
//import {BrowerAnimatedModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from  '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './categoryService/category.component';
import { ReminderComponent } from './reminder/reminder.component';
//import {MatSelectModule} from '/angular/material/MatSelectModule'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  //  TakenoteComponent,
    SavenoteComponent,
  SidebarComponent,
  CategoryComponent,
  ReminderComponent,
   // TakeNoteComponent
  ],
  imports: [
   // BrowserAnimationsModule,
   BrowserModule,
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   BrowserAnimationsModule,
   MatMenuModule,
   MatExpansionModule,
   MatFormFieldModule,
   MatInputModule,
   FormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 