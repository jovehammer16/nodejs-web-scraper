const axios = require('axios');
const cheerio = require('cheerio');
const { scrapeBySelector } = require('../scrape');

describe('Web Scraping by Selector', () => {
  test('Extract S&P500 Index', async () => {
    const url = 'https://finance.yahoo.com';
    const selector = '#marketsummary-itm-0 > h3 > fin-streamer';

    // Use Jest's mock implementation of axios to simulate a successful HTTP request
    axios.get = jest.fn(() => Promise.resolve({ data: '<div id="marketsummary-itm-0"><h3><fin-streamer>S&P500 Value</fin-streamer></h3></div>' }));

    // Call the function and expect the extracted data to match
    const extractedData = await scrapeBySelector(url, selector);
    expect(extractedData).toBe('S&P500 Value');
  });

  test('Handle HTTP Request Error', async () => {
    const url = 'https://finance.yahoo.com';
    const selector = '#marketsummary-itm-0 > h3 > fin-streamer';

    // Use Jest's mock implementation of axios to simulate a failed HTTP request
    axios.get = jest.fn(() => Promise.reject(new Error('HTTP request failed')));

    // Call the function and expect it to throw an error
    await expect(scrapeBySelector(url, selector)).rejects.toThrow('HTTP request failed');
  });

  // Add more test cases for different scenarios
});
