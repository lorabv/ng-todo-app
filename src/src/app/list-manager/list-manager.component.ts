import { Component } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <div class="todo-app">
      <h1>
        {{ title }}
      </h1>
      <p *ngIf="!authService.isLoggedIn">
        You must log in to access the todo app!
      </p>
      <ng-template [ngIf]="authService.isLoggedIn">
        <div class="todo-add">
          <todo-input (submit)="addItem($event)"></todo-input>
        </div>
        <ul>
          <li *ngFor="let item of todoList">
            <todo-item [todoItem]="item" (remove)="removeItem($event)"></todo-item>
          </li>
        </ul>
      </ng-template>
    </div>
`,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent  {
  title = 'todo';
  todoList;

  constructor(private todoListService:TodoListService, public authService: AuthService) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }
}
