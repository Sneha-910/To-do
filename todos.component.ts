import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
//import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { CommentTodoDialogComponent } from "../comment-todo-dialog/comment-todo-dialog.component";
import { DeleteTodoDialogComponent } from "../delete-todo-dialog/delete-todo-dialog.component";
import { DataService } from "../shared/data.service";
import { Todo } from "../shared/todo.model";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private DataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todos = this.DataService.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    //form['isEdit']=true;

    if (form.invalid) return alert("form is invalid");
    console.log("form submitted");
    console.log(form);
    this.DataService.addTodo(new Todo(form.value.text, false, []));

    form.reset();
  }

  save() {}

  toggleCompleted(todo: Todo) {
    const index = this.todos.indexOf(todo);
    todo.completed = !todo.completed;
    this.DataService.updateTodo(index,todo);
  }

  /* editTodo(todo:Todo){
   //index
   //updated info

   const index=this.todos.indexOf(todo)
   //this.DataService.updateTodo(){}

   let dialogRef=this.dialog.open(EditTodoDialogComponent,{

     width:'700px',
     data:todo
   });

     dialogRef.afterClosed().subscribe((result)=>{
       if(result){
         this.DataService.updateTodo(index,result)

       }
     })
    
 }*/

  /*deleteTodo(todo:Todo){
    const index=this.todos.indexOf(todo)
    this.DataService.deleteTodo(index)
  }*/

  commentTodo(todo: Todo) {
    //index
    //updated info
    console.log(todo);
    const copyComments: string[] = [...todo.comments];
    const index = this.todos.indexOf(todo);
    //this.DataService.commentTodo(){}

    let dialogRef = this.dialog.open(CommentTodoDialogComponent, {
      width: "700px",
      data: todo,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        copyComments.push(result.newComment);
        this.DataService.commentTodo(
          index,
          new Todo(todo.text, todo.completed, copyComments)
        );
      }
    });
  }

  deleteTodo(todo: Todo) {
    //index
    //updated info

    const index = this.todos.indexOf(todo);
    //this.DataService.commentTodo(){}

    let dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
      width: "700px",
      data: todo,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.DataService.deleteTodo(index, result);
      }
    });
  }
}
