import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'angular2-todos-playground-app',
  templateUrl: 'angular2-todos-playground.component.html',
  styleUrls: ['angular2-todos-playground.component.css']
})
export class Angular2TodosPlaygroundAppComponent {
  clearCompleted = function() {
    console.log('clearCompleted');
  };
}
