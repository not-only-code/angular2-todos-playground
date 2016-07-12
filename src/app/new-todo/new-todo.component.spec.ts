/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NewTodoComponent } from './new-todo.component';
import { TodosService } from '../todos.service';

describe('Component: NewTodo', () => {
  let component;
  /*

  beforeEach(() => {
    component = new NewTodoComponent(new TodosService());
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have `addTodo()` method', () => {
    expect(component.addTodo).toBeTruthy();
  });

  it('`addTodo()` should add an item in `TodosService.items`', () => {

    let itemName = 'New item',
        item = {
          name: itemName,
          completed: false
        },
        // mock DOM <input> element here !!
        $input = {
          value: itemName,
          blur: function() {}
        };
    component.addTodo($input);
    expect(component.todosService.items).toContain(item);
  });*/
});
