import { RouterConfig } from '@angular/router';
import { TodoListComponent } from './todo-list/';

export const routes: RouterConfig = [
  { path: '',          component: TodoListComponent },
  { path: 'all',       component: TodoListComponent },
  { path: 'completed', component: TodoListComponent },
  { path: 'active',    component: TodoListComponent }
];