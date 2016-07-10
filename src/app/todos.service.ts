import { Injectable } from '@angular/core';

interface TodoModel {
  name?: string,
  completed?: boolean
}

@Injectable()
export class TodosService {
  private _items:Array<TodoModel>;

  constructor() {
    this.items = [
      {
        "name": "Comprar el pan",
        "completed": true
      },{
        "name": "Poner la lavadora",
        "completed": false
      },{
        "name": "Tender la ropa",
        "completed": true
      },{
        "name": "Sacar a pasear el perro de la vecina",
        "completed": false
      }
    ];
  }

  set items(newItems:Array<TodoModel>) {
    this._items = newItems;
  }

  get items() {
    return this._items;
  }

  add (todo) {
    this._items.push(todo);
  }
}
