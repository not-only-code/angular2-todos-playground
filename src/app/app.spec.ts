import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppComponent } from '../app/app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: Angular2TodosPlayground', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));
});
