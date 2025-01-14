const axios = require('axios');
const cheerio = require('cheerio');

const scrapeHardRubbishInfo = async () => {
    try {
        // Example: Scraping Merri-bek Council website
        const { data } = await axios.get('https://www.merri-bek.vic.gov.au/living-in-merri-bek/waste-and-recycling/recycling-a-to-z-guide/');
        const $ = cheerio.load(data);

        const items = [];

        // Example selectors - update these based on actual website structure
        $('.content-area').each((index, element) => {
            const title = $(element).find('h2').text().trim();
            const description = $(element).find('p').text().trim();
            const links = [];
            
            $(element).find('a').each((i, link) => {
                links.push({
                    text: $(link).text().trim(),
                    url: $(link).attr('href')
                });
            });

            items.push({
                title,
                description,
                links
            });
        });

        // Format data to match your results structure
        return formatResults(items);
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

const formatResults = (items) => {
    return items.map(item => `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <ul>
            ${item.links.map(link => `
                <li><a href="${link.url}" target="blank">${link.text}</a></li>
            `).join('')}
        </ul>
    `).join('');
};

module.exports = { scrapeHardRubbishInfo };