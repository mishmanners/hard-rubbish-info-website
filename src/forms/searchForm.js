function updateConditionOptions() {
        const type = document.getElementById('type').value;
        const conditionSelect = document.getElementById('condition');

        // add a console log here so we can see what's happening
        console.log('type:', type);

        let options = [];

        if (type === 'furniture') {
            options = [
                { value: 'useable', text: 'Useable' },
                { value: 'nonuse', text: 'Not useable' },
            ];
        } else if (type === 'electronics') {
            options = [
                { value: 'working', text: 'Working' },
                { value: 'not-working', text: 'Not Working' }
            ];

        } else if (type === 'lappliances') {
            options = [
                { value: 'working', text: 'Working' },
                { value: 'not-working', text: 'Not Working' }
            ];

        } else if (type === 'sappliances') {
            options = [
                { value: 'working', text: 'Working' },
                { value: 'not-working', text: 'Not Working' }
            ];
        } else if (type === 'clothing') {
            options = [
                { value: 'wearable', text: 'Wearable' },
                { value: 'nonwear', text: 'Not wearable' },
            ];
        } else if (type === 'toys') {
            options = [
                { value: 'useable', text: 'Useable' },
                { value: 'nonuse', text: 'Not useable' },
            ];
        } else if (type === 'glass') {
            options = [
                { value: 'broken', text: 'Broken' },
                { value: 'nbroken', text: 'Not Broken' },
            ];
        } else if (type === 'mattress') {
            options = [
                { value: 'useable', text: 'Useable' },
                { value: 'nonuse', text: 'Not useable' },
            ];
       
        } else {
            options = [
                { value: 'nil', text: 'Not needed' },
            ];
        }

        // add a console log here so we can see what's happening
        console.log('Options:', options);

        conditionSelect.innerHTML = ''; // Clear existing options

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.text;
            conditionSelect.appendChild(opt);
        });
    }

    function handleSearchFormSubmission(event) {
        event.preventDefault(); // Prevent the default form submission

        const type = document.getElementById('type').value;
        const condition = document.getElementById('condition').value;

        const searchCriteria = {
            type: type,
            condition: condition,
        };

        // Process the search criteria (e.g., send to server or display results)
        console.log('Search Criteria:', searchCriteria);

        // Fetch or generate the information based on the search criteria
        const resultsHtml = fetchInformation(searchCriteria);

        // For example, you can display the results on the page
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `<p>Searching for: (${type}, ${condition})</p>`;
    }

function fetchInformation(searchCriteria) {
// This function should fetch or generate the information based on the search criteria
// For demonstration purposes, we'll return a static response
    const { type, condition } = searchCriteria;
            
    // Example static response
    if (type === 'furniture' && condition === 'useable') {
        return `
            <h3>Search Results</h3>
            <p>Item: ${item}</p>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>Can be donated via local Facebook groups such as <a href="https://www.facebook.com/groups/1039086312950286" target="blank">Hard Rubbish Rescue Merri-bek (Moreland)</a>, or local Karma network, such as <a href="https://www.facebook.com/groups/281961012221705" target="blank">Coburg Good Karma Network</a>.</li>
                <li>Can be sold online on platforms like Facebook Marketplace, Gumtree, or eBay.</li>
                <li>Can also be donated to local charities such as <a href="https://www.vinnies.org.au/vic/shops?coords=-37.700454,144.766873&inputVal=3038" target="blank">St Vincent de Paul</a> or <a href="https://www.salvationarmy.org.au/locations/?location=COBURG%2C%20VIC%2C%203058&grouped_categories_keywords=Stores" target="blank">The Salvation Army</a>. Call ahead to ensure they accept furniture, as not all shops are large enough to accept furniture.</li>
            </ul>
        `;

    } else if (type === 'furniture' && condition === 'nonuse') {
        return `
            <h3>Search Results</h3>
            <p>Item: ${item}</p>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>Couches are accepted for hard rubbish collection. You are eligible for two hard rubbish collections per calendar year. Book your hard rubbish on the <a href="https://www.merri-bek.vic.gov.au/living-in-merri-bek/waste-and-recycling/bins-and-collection-services/hard-waste-collection/" target="blank">Merri-Bek Council website</a>. Please place them on the nature strip the night before your collection day with the hard rubbish collection label that you'll receive in the mail.</li>
            </ul>
        `;
    } else {
        return `
            <h3>Search Results</h3>
            <p>Item: ${item}</p>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>No specific information available for this combination.</p>
        `;
    }
}

// Attach the function to the select element
document.getElementById('type').addEventListener('change', updateConditionOptions);

// Attach the form submission handler
document.getElementById('search-form').addEventListener('submit', handleSearchFormSubmission);

