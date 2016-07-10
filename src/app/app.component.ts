import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  clearCompleted = function() {
    console.log('clearCompleted');
  };
}
