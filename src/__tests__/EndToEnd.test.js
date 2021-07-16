import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(300000);
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector('.EventItem');
  });

  afterAll(() => {
    browser.close();
  });

  test('An Event element is collaped by default', async () => {
    const eventDetails = await page.$('.EventItem .eventDetails');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.EventItem .ToggleButton');
    const eventDetails = await page.$('.EventItem .eventDetails');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.EventItem .ToggleButton');
    const eventDetails = await page.$('.EventItem .eventDetails');
    expect(eventDetails).toBeNull();
  });

});