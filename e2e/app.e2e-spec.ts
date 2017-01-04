import { JsGoBlogPage } from './app.po';

describe('js-go-blog App', function() {
  let page: JsGoBlogPage;

  beforeEach(() => {
    page = new JsGoBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
