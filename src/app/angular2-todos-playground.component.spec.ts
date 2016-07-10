import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2TodosPlaygroundAppComponent } from '../app/angular2-todos-playground.component';

beforeEachProviders(() => [Angular2TodosPlaygroundAppComponent]);

describe('App: Angular2TodosPlayground', () => {
  it('should create the app',
      inject([Angular2TodosPlaygroundAppComponent], (app: Angular2TodosPlaygroundAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-todos-playground works!\'',
      inject([Angular2TodosPlaygroundAppComponent], (app: Angular2TodosPlaygroundAppComponent) => {
    expect(app.title).toEqual('angular2-todos-playground works!');
  }));
});
