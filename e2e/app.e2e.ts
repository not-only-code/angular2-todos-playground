import { Angular2TodosPlaygroundPage } from './app.po';

describe('angular2-todos-playground App', function() {
  let page: Angular2TodosPlaygroundPage;

  beforeEach(() => {
    page = new Angular2TodosPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-todos-playground works!');
  });
});
