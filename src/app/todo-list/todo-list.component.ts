import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from '../todos.service';
import { TodoModel } from '../todo.model';
import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  @Input() todosService:TodosService;
  allCompleted:boolean;
  items:TodoModel[];
  editing:TodoModel;

  constructor() {}

  ngOnInit() {
    this.todosService.loadItems()
      .subscribe((items) => {
        this.items = items;
        this.allCompleted = items.length === _.filter(items, {completed:true}).length;
      });
  }

  editItem(item:TodoModel, $input) {
    this.editing = item;
    // dirty, implement Angular2 Zones
    setTimeout(function() {
      $input.focus();
    }, 100);
  }

  toggleAll() {
    _.each(this.items, (item) => {
      item.completed = !this.allCompleted;
    });
  }

  removeItem (item:TodoModel) {
    _.remove(this.items, item);
  }
}
