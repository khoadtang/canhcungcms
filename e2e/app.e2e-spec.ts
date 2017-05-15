import { CanhcungPage } from './app.po';

describe('canhcung App', () => {
  let page: CanhcungPage;

  beforeEach(() => {
    page = new CanhcungPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
