import { TimeTrackingPage } from './app.po';

describe('time-tracking App', () => {
  let page: TimeTrackingPage;

  beforeEach(() => {
    page = new TimeTrackingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
