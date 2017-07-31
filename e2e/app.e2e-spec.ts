import { DoubsPage } from './app.po';

describe('doubs App', () => {
  let page: DoubsPage;

  beforeEach(() => {
    page = new DoubsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
