import { Component, OnInit, Input } from '@angular/core';
import { Router, ROUTER_DIRECTIVES }  from '@angular/router';
import { TodosService } from '../todos.service';
import { TodoModel } from '../todo.model';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private todosService:TodosService) {}

  ngOnInit() {}
}
