const axios = require('axios');
const cheerio = require('cheerio');
const { scrapeBySelector } = require('../scrape'); // Import the function to be tested

describe('Web Scraping by Selector', () => {
  test('Extract S&P500 Index', async () => {
    const url = 'https://finance.yahoo.com';
    const selector = '#marketsummary-itm-0 > h3 > fin-streamer';

    // Use Jest's mock implementation of axios to simulate the response
    axios.get = jest.fn(() => Promise.resolve({ data: '<div id="marketsummary-itm-0"><h3><fin-streamer>S&P500 Value</fin-streamer></h3></div>' }));
    
    const extractedData = await scrapeBySelector(url, selector);

    expect(extractedData).toBe('S&P500 Value');
  });

  // Add more test cases for different URLs and selectors
});

