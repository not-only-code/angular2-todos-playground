import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

@Injectable()
export class TodosService {
  private _items = [
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

  // constructor(http:Http) {
  //   this.items = http.get('src/todos.json')
  //     .map(response => response.json());

  //   return this;
  // }

  get items() {
    return this._items;
  }
  add (todo) {
    this._items.push(todo);
  }
}
