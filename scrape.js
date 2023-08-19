const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeBySelector(url, selector) {
  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);
  const extractedData = $(selector).text();

  return extractedData;
}

module.exports = { scrapeBySelector };

