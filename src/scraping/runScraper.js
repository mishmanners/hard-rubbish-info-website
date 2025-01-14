const { scrapeHardRubbishInfo } = require('./scraper');

const url = 'https://www.merri-bek.vic.gov.au/living-in-merri-bek/waste-and-recycling/recycling-a-to-z-guide/#az-nav'; // Replace with the actual URL you want to scrape

scrapeHardRubbishInfo(url).then(items => {
    console.log('Scraped Items:', items);
}).catch(error => {
    console.error('Error:', error);
});