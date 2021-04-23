import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";
@Injectable({
  providedIn: "root",
})
export class DataService {
  todos: Todo[];
  constructor() {
    this.todos = [
      //new Todo('this is test', true, ''),
      new Todo("loreum ipsum was great", true, []),
    ];
  }

  getAllTodos() {
    return this.todos;
  }
  updateTodo(index: number, todo: Todo) {
    this.todos[index] = todo;
    console.log(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    // console.log(this.todos);
  }

  /*addCommentTodo(index:number,commentTodo:string){
    this.todos[index].comments.push(commentTodo)

  }*/

  /* updateTodo(index:number,updatedTodo:Todo){
    this.todos[index]=updatedTodo
  }*/

  deleteTodo(index: number, deletedTodo: Todo) {
    //this.todos[index] = deletedTodo

    this.todos.splice(index, 1);
  }

  commentTodo(index: number, newComment: Todo) {
    this.todos[index] = newComment;
    // console.log(this.todos);
  }
}
