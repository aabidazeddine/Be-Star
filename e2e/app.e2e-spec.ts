import { AngularAliPage } from './app.po';

describe('angular-ali App', () => {
  let page: AngularAliPage;

  beforeEach(() => {
    page = new AngularAliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
