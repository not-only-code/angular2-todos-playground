import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { TodoModel } from './todo.model';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class TodosService {
  private allItems:TodoModel[] = [];
  items:TodoModel[] = [];

  constructor(
    private http:Http,
    private router:Router
  ) {
      if (!this.allItems.length) {
        this.loadItems()
          .subscribe((items) => {
            this.allItems = items;
            this.filterItems();
          });
     }
  }

  filterItems():TodoModel[] {
    switch(this.router.url) {
      case '/completed':
        this.items = this.getCompleted();
        break;
      case '/active':
        this.items = this.getActive();
        break;
      default: 
        this.items = this.allItems;
    }
    return this.items;
  }

  private loadItems():any {
    return this.http.get('/todos.json')
      .map((res) => res.json() || { } );
  }

  public addItem (todoName:string):void {
    this.allItems.push({
      name: todoName,
      completed: false
    });
    this.filterItems();
  }

  public removeItem = (item:TodoModel, silent:Boolean = false):void => {
    _.remove(this.allItems, item);
    if (!silent) {
      this.filterItems();
    }
  }

  private getItems(completed:Boolean = false):TodoModel[] {
    return _.filter(this.allItems, {completed: completed});
  }

  public getCompleted():TodoModel[] {
    return this.getItems(true);
  }

  public getActive():TodoModel[] {
    return this.getItems(false);
  }

  public getAllItems():TodoModel[] {
    return this.allItems;
  }

  public clearCompleted = ():void => {
    let completeds = _.filter(this.allItems, {completed: true});
    _.each(completeds, (item) => {
      this.removeItem(item, true);
    });
    this.filterItems();
  }
}
