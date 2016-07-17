import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { TodoModel } from '../todo.model';
import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  allCompleted:boolean;
  editing:TodoModel;

  constructor(
    private todosService:TodosService) {}

  ngOnInit() {
    this.todosService.filterItems();
    let items = this.todosService.items;
    this.allCompleted = items.length && items.length === _.filter(items, {completed:true}).length;
  }

  private onCompleted():void {
    // dirty, implement Angular2 Zones
    setTimeout(() => this.ngOnInit(), 50);
  }

  editItem(item:TodoModel, $input):void {
    this.editing = item;
    // dirty, implement Angular2 Zones
    setTimeout(function() {
      $input.focus();
    }, 50);
  }

  private toggleAll():void {
    _.each(this.todosService.items, (item) => {
      item.completed = !this.allCompleted;
    });
  }
}
