import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from'@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { CommentTodoDialogComponent } from './comment-todo-dialog/comment-todo-dialog.component';
import { DeleteTodoDialogComponent } from './delete-todo-dialog/delete-todo-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    //EditTodoDialogComponent,
    CommentTodoDialogComponent,
    DeleteTodoDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
