const { scrapeBySelector } = require('./scrape');

// URL of the website you want to scrape
const url = 'https://finance.yahoo.com';

// CSS selector to extract data
const selector = '#marketsummary-itm-0 > h3 > fin-streamer';

// Call the scrapeBySelector function and log the result
scrapeBySelector(url, selector)
  .then(extractedData => {
    console.log('Extracted Data:', extractedData);
  })
  .catch(error => {
    console.error('Error:', error);
  });

