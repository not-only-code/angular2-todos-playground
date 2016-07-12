import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from '../todos.service';
import { TodoModel } from '../todo.model';
import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'app-new-todo',
  templateUrl: 'new-todo.component.html'
})
export class NewTodoComponent implements OnInit {
  @Input() todosService:TodosService;
  items:TodoModel[];

  constructor() {}

  ngOnInit() {}

  addTodo($input) {
    if (_.isEmpty($input.value)) {
      return;
    }
    this.todosService.addItem($input.value);
    $input.value = "";
    $input.blur();
  }
}
