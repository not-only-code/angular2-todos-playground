import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  moduleId: module.id,
  selector: 'app-new-todo',
  templateUrl: 'new-todo.component.html',
  styleUrls: ['new-todo.component.css'],
  providers: [TodosService]
})
export class NewTodoComponent implements OnInit {

  constructor(private todosService:TodosService) {
  }

  ngOnInit() {
  }

  addTodo($input) {
    this.todosService.add({
      name: $input.value,
      completed: false
    });
    $input.value = "";
    $input.blur();
  }
}
