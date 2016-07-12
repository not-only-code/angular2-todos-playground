import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TodoModel } from './todo.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class TodosService {
  items:TodoModel[] = [];
  errorMessage:any;

  constructor(private http:Http) {}

  loadItems ():Observable<TodoModel[]> {
    return this.http.get('/todos.json')
      .map((res) => {
        this.items = res.json() || { };
        return this.items;
      });
  }

  private handleError (error:any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  addItem (todoName:string) {
    this.items.push({
      name: todoName,
      completed: false
    });
  }

  clearCompleted = () => {
    let completeds = _.filter(this.items, {completed: true});
    _.each(completeds, (item) => {
      _.remove(this.items, item);  
    });
  }
}
