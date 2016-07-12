import { Component, OnInit } from '@angular/core';
import { NewTodoComponent } from './new-todo/';
import { TodoListComponent } from './todo-list/';
import { TodosService } from './todos.service';
import { TodoModel } from './todo.model';


@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NewTodoComponent, TodoListComponent],
  providers: [TodosService]
})
export class AppComponent implements OnInit {

  constructor(private todosService:TodosService) {}

  ngOnInit() {}

  clearCompleted = this.todosService.clearCompleted;
}
