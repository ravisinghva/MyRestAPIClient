import { HelloTestPage } from './app.po';

describe('hello-test App', () => {
  let page: HelloTestPage;

  beforeEach(() => {
    page = new HelloTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
