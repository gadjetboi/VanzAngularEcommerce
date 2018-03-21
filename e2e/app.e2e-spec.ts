import { VanzTubeSpaPage } from './app.po';

describe('vanz-tube-spa App', () => {
  let page: VanzTubeSpaPage;

  beforeEach(() => {
    page = new VanzTubeSpaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
