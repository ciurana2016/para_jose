import { TemplatingAppPage } from './app.po';

describe('templating-app App', () => {
  let page: TemplatingAppPage;

  beforeEach(() => {
    page = new TemplatingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
