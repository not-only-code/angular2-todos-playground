import { Component } from '@angular/core';
import { NewTodoComponent } from './new-todo/';

@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NewTodoComponent]
})
export class AppComponent {
  clearCompleted = function() {
    console.log('clearCompleted');
  };
}
