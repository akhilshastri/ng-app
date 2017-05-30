import { AlgoAppPage } from './app.po';

describe('algo-app App', () => {
  let page: AlgoAppPage;

  beforeEach(() => {
    page = new AlgoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
