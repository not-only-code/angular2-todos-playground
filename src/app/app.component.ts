import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NewTodoComponent } from './new-todo/';
import { FooterComponent } from './footer/';
import { TodosService } from './todos.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  directives: [NewTodoComponent, FooterComponent, ROUTER_DIRECTIVES],
  providers: [TodosService]
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
