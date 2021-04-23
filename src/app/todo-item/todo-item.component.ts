import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import{Todo}from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  [x: string]: any;
  //form['isEdit']=false;
  isComplete: boolean = false;
  isEdit:boolean=false;

  @Input() todo:Todo
  @Output() todoClicked:EventEmitter<void>=new EventEmitter()
  @Output() editClicked:EventEmitter<void>=new EventEmitter()
  @Output() deleteClicked:EventEmitter<void>=new EventEmitter()
  @Output() commentClicked:EventEmitter<void>=new EventEmitter()

  constructor() { }

  

  ngOnInit(): void {

    
  }

 /*onCheck(element) {
    let newElement = { ...element };
    let index = this.taskService.getIndex(newElement);
    newElement.mark = element.mark ? false : true;
    this.taskService.updateTask(index, newElement);
    this.dataSource = [...this.taskService.getAllTask()];
  }*/
  


  onTodoClicked(){
    this.todoClicked.emit()
    console.log("to do was clicked", this.todo.completed)
  }

  onCheckClicked(){
    this.isComplete = !this.isComplete;
  }

  onEditClicked() {
  // {
      this.isEdit=true;
    this.editClicked.emit()
    
  

  }
  onDeleteClicked(){
    this.deleteClicked.emit()
  }

  onCommentClicked(){
    this.commentClicked.emit()
  }

  //comment clicked

}
