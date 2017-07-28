import { IaAppPage } from './app.po';

describe('ia-app App', () => {
  let page: IaAppPage;

  beforeEach(() => {
    page = new IaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to lsl!');
  });
});
