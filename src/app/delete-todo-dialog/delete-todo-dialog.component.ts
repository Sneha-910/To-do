import { Component, OnInit, Inject } from '@angular/core';
import{NgForm} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-delete-todo-dialog',
  templateUrl: './delete-todo-dialog.component.html',
  styleUrls: ['./delete-todo-dialog.component.scss']
})
export class DeleteTodoDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DeleteTodoDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public todo:Todo) { }
  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()

   }

   onFormSubmit(form:NgForm){
    //this.todo.text=form.value.text;
    const deletedTodo={
      ...this.todo,
      ...form.value
    }

    this.dialogRef.close(deletedTodo)
  }
}  
