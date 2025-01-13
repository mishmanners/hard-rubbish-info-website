const axios = require('axios');
const cheerio = require('cheerio');

const scrapeHardRubbishInfo = async (url) => {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const items = [];

        $('.item-selector').each((index, element) => {
            const title = $(element).find('.title-selector').text().trim();
            const description = $(element).find('.description-selector').text().trim();
            items.push({ title, description });
        });

        return items;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

module.exports = { scrapeHardRubbishInfo };