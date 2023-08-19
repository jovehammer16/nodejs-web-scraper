const axios = require('axios');
const cheerio = require('cheerio');

// URL of the website you want to scrape
const url = 'https://finance.yahoo.com';

// Perform an HTTP GET request to fetch the HTML content
axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html); // Load the HTML into cheerio

    // Use cheerio selectors to extract data
    const indexSP500 = $('#marketsummary-itm-0 > h3 > fin-streamer').text();

    console.log('S&P500: ', indexSP500);
  })
  .catch(error => {
    console.error('Error:', error);
  });


