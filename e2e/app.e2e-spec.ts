import { NewsparkFrontendPage } from './app.po';

describe('newspark-frontend App', function() {
  let page: NewsparkFrontendPage;

  beforeEach(() => {
    page = new NewsparkFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
