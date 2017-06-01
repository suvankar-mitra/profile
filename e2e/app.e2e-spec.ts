import { IAmSuvankarPage } from './app.po';

describe('i-am-suvankar App', () => {
  let page: IAmSuvankarPage;

  beforeEach(() => {
    page = new IAmSuvankarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
