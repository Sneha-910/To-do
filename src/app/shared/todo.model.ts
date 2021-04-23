export class Todo {
  public text: string;
  public completed: boolean;
  public comments: string[];

  constructor(text: string, completed?: boolean, comments?: string[]) {
    this.text = text;
    this.completed = completed;
    this.comments = [...comments];
  }
}
