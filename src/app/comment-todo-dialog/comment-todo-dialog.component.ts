import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Todo } from "../shared/todo.model";

@Component({
  selector: "app-comment-todo-dialog",
  templateUrl: "./comment-todo-dialog.component.html",
  styleUrls: ["./comment-todo-dialog.component.scss"],
})
export class CommentTodoDialogComponent implements OnInit {
  commentData: any;

  constructor(
    public dialogRef: MatDialogRef<CommentTodoDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {
    this.commentData = this.fb.group({
      comment: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  onFormSubmit() {
    const comment = this.commentData.value.comment;
    if (this.commentData.status === "VALID") {
      this.dialogRef.close({ newComment: comment });
    }
  }
}
