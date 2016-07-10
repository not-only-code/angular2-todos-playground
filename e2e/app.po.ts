export class Angular2TodosPlaygroundPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-todos-playground-app h1')).getText();
  }
}
