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

function fetchInformation(searchCriteria) {
    // This function should fetch or generate the information based on the search criteria
    const { type, condition } = searchCriteria;

    // Static response
    if (type === 'furniture' && condition === 'useable') {
        return `
            <h3>Search Results</h3>
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
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>Are accepted for hard rubbish collection. You are eligible for two hard rubbish collections per calendar year. Book your hard rubbish on the <a href="https://www.merri-bek.vic.gov.au/living-in-merri-bek/waste-and-recycling/bins-and-collection-services/hard-waste-collection/" target="blank">Merri-Bek Council website</a>. Please place them on the nature strip the night before your collection day with the hard rubbish collection label that you'll receive in the mail.</li>
            </ul>
        `;
    } else if (type === 'mattress' && condition === 'useable') {
        return `
            <h3>Search Results</h3>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>Can be donated via local Facebook groups such as <a href="https://www.facebook.com/groups/1039086312950286" target="blank">Hard Rubbish Rescue Merri-bek (Moreland)</a>, or local Karma network, such as <a href="https://www.facebook.com/groups/281961012221705" target="blank">Coburg Good Karma Network</a>.</li>
                <li>Can be sold online on platforms like Facebook Marketplace, Gumtree, or eBay.</li>
                <li>Some furniture stores take old mattresses when you purchase a new one. Call ahead to check if they offer this service.</li>
            </ul>
        `;
    } else if (type === 'mattress' && condition === 'nonuse') {
        return `
            <h3>Search Results</h3>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>Are accepted for hard rubbish collection. You are eligible for two hard rubbish collections per calendar year. Book your hard rubbish on the <a href="https://www.merri-bek.vic.gov.au/living-in-merri-bek/waste-and-recycling/bins-and-collection-services/hard-waste-collection/" target="blank">Merri-Bek Council website</a>. Please place them on the nature strip the night before your collection day with the hard rubbish collection label that you'll receive in the mail.</li>
                <li>Some furniture stores take old mattresses when you purchase a new one, even if your mattress is unusable. Call ahead to check if they offer this service.</li>
            </ul>
        `;
    } else if (type === 'electronics' && condition === 'working') {
        return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                    <li>Can be donated via local Facebook groups such as <a href="https://www.facebook.com/groups/1039086312950286" target="blank">Hard Rubbish Rescue Merri-bek (Moreland)</a>, or local Karma network, such as <a href="https://www.facebook.com/groups/281961012221705" target="blank">Coburg Good Karma Network</a>.</li>
                    <li>Can be sold online on platforms like Facebook Marketplace, Gumtree, or eBay.</li>
                    <li>Can be sold in person at <a href="https://www.cashconverters.com.au/store-locator/vic" target="blank">Cash Converters</a>.</li>
                    <li>Can be donated to <a href="https://www.brunswicktoollibrary.org/" target="blank">libraries</a>, <a href="https://thereconnectproject.com.au/" target="blank">Connect Project</a>, <a href="https://gleegivers.au/" target="blank">Glee Givers</a>, or <a href="https://www.rimern.org.au/" target="blank">community center</a>.</li>
                </ul>
            `;

    } else if (type === 'electronics' && condition === 'not-working') {
        return `
            <h3>Search Results</h3>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>Can be recycled through <a href="https://recyclingnearyou.com.au/ewastescheme/" target="blank">the National Recycling Scheme</a> for free. This will include free drop off locations at various Harvey Norman stores.</li>
                <li>Are accepted for hard rubbish collection. You are eligible for two hard rubbish collections per calendar year. Book your hard rubbish on the <a href="https://www.merri-bek.vic.gov.au/living-in-merri-bek/waste-and-recycling/bins-and-collection-services/hard-waste-collection/" target="blank">Merri-Bek Council website</a>. Please place them on the nature strip the night before your collection day with the hard rubbish collection label that you'll receive in the mail.</li>
                <li>Can be recycled at the <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/Electronic-waste" target="blank">Darebin Resource Recovery Centre</a> for a fee.</li>
            </ul>
        `;

    } else if (type === 'lappliances' && condition === 'working') {
        return `
            <h3>Search Results</h3>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>Can be donated via local Facebook groups such as <a href="https://www.facebook.com/groups/1039086312950286" target="blank">Hard Rubbish Rescue Merri-bek (Moreland)</a>, or local Karma network, such as <a href="https://www.facebook.com/groups/281961012221705" target="blank">Coburg Good Karma Network</a>.</li>
                <li>Can be sold online on platforms like Facebook Marketplace, Gumtree, or eBay.</li>
                <li>Can be sold in person at <a href="https://www.cashconverters.com.au/store-locator/vic" target="blank">Cash Converters</a>.</li>
            </ul>
        `;

    } else if (type === 'lappliances' && condition === 'not-working') {
        return `
            <h3>Search Results</h3>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>TVs and monitors can be recycled through <a href="https://recyclingnearyou.com.au/ewastescheme/" target="blank">the National Recycling Scheme</a> for free. This will include free drop off locations at various Harvey Norman stores.</li>
                <li>Are accepted for hard rubbish collection. You are eligible for two hard rubbish collections per calendar year. Book your hard rubbish on the <a href="https://www.merri-bek.vic.gov.au/living-in-merri-bek/waste-and-recycling/bins-and-collection-services/hard-waste-collection/" target="blank">Merri-Bek Council website</a>. Please place them on the nature strip the night before your collection day with the hard rubbish collection label that you'll receive in the mail.</li>
                <li>Can be recycled at the <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for a fee.</li>
            </ul>
        `;
    } else if (type === 'sappliances' && condition === 'working') {
        return `
            <h3>Search Results</h3>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>Can be donated via local Facebook groups such as <a href="https://www.facebook.com/groups/1039086312950286" target="blank">Hard Rubbish Rescue Merri-bek (Moreland)</a>, or local Karma network, such as <a href="https://www.facebook.com/groups/281961012221705" target="blank">Coburg Good Karma Network</a>.</li>
                <li>Can be sold online on platforms like Facebook Marketplace, Gumtree, or eBay.</li>
                <li>Can be sold in person at <a href="https://www.cashconverters.com.au/store-locator/vic" target="blank">Cash Converters</a>.</li>
            </ul>
        `;

    } else if (type === 'sappliances' && condition === 'not-working') {
        return `
            <h3>Search Results</h3>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>Very small appliances can be placed in the regular rubbish bin.</li>
                <li>Are accepted for hard rubbish collection. You are eligible for two hard rubbish collections per calendar year. Book your hard rubbish on the <a href="https://www.merri-bek.vic.gov.au/living-in-merri-bek/waste-and-recycling/bins-and-collection-services/hard-waste-collection/" target="blank">Merri-Bek Council website</a>. Please place them on the nature strip the night before your collection day with the hard rubbish collection label that you'll receive in the mail.</li>
                <li>Can be recycled at the <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for a fee.</li>
            </ul>
        `;

    } else if (type === 'clothing' && condition === 'wearable') {
            return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                    <li>Can be donated via local Facebook groups such as <a href="https://www.facebook.com/groups/1039086312950286" target="blank">Hard Rubbish Rescue Merri-bek (Moreland)</a>, or local Karma network, such as <a href="https://www.facebook.com/groups/281961012221705" target="blank">Coburg Good Karma Network</a>.</li>
                    <li>Can be sold online on platforms like Facebook Marketplace, Gumtree, or eBay.</li>
                    <li>Can also be donated to local charities such as <a href="https://www.vinnies.org.au/vic/shops?coords=-37.700454,144.766873&inputVal=3038" target="blank">St Vincent de Paul</a> or <a href="https://www.salvationarmy.org.au/locations/?location=COBURG%2C%20VIC%2C%203058&grouped_categories_keywords=Stores" target="blank">The Salvation Army</a>.</li>
                    <li>Can be recycled at the <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for free.</li>
                </ul>
            `;
            
    } else if (type === 'clothing' && condition === 'nonwear') {
        return `
            <h3>Search Results</h3>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>Recycle unwearable clothing and unusable bedding through <a href="https://www.after.net.au/" target="blank">After Recycling</a>. They will recycle the textiles into industrial rags, insulation, and other products. Book a collection from them. directly.</li>
                <li>Small amounts of clothing can be placed in the regular rubbish bin.</li>
                <li>Are accepted for hard rubbish collection. You are eligible for two hard rubbish collections per calendar year. Book your hard rubbish on the <a href="https://www.merri-bek.vic.gov.au/living-in-merri-bek/waste-and-recycling/bins-and-collection-services/hard-waste-collection/" target="blank">Merri-Bek Council website</a>. Please place them on the nature strip the night before your collection day with the hard rubbish collection label that you'll receive in the mail.</li>
            </ul>
        `;

    } else if (type === 'toys' && condition === 'usable') {
        return `
            <h3>Search Results</h3>
            <p>Type: ${type}</p>
            <p>Condition: ${condition}</p>
            <p>Here is the information based on your search criteria:</p>
            <ul>
                <li>Can be sold in person at <a href="https://www.cashconverters.com.au/store-locator/vic" target="blank">Cash Converters</a>.</li>
                <li>Can be donated via local Facebook groups such as <a href="https://www.facebook.com/groups/1039086312950286" target="blank">Hard Rubbish Rescue Merri-bek (Moreland)</a>, or local Karma network, such as <a href="https://www.facebook.com/groups/281961012221705" target="blank">Coburg Good Karma Network</a>.</li>
                <li>Can be sold online on platforms like Facebook Marketplace, Gumtree, or eBay.</li>
                <li>Can also be donated to local charities such as <a href="https://www.vinnies.org.au/vic/shops?coords=-37.700454,144.766873&inputVal=3038" target="blank">St Vincent de Paul</a> or <a href="https://www.salvationarmy.org.au/locations/?location=COBURG%2C%20VIC%2C%203058&grouped_categories_keywords=Stores" target="blank">The Salvation Army</a>.</li>
                
            </ul>
        `;

    } else if (type === 'toys' && condition === 'unusable') {
    return `
        <h3>Search Results</h3>
        <p>Type: ${type}</p>
        <p>Condition: ${condition}</p>
        <p>Here is the information based on your search criteria:</p>
        <ul>
            <li>Small toys can be placed in the regular rubbish bin.</li>
            <li>Are accepted for hard rubbish collection. You are eligible for two hard rubbish collections per calendar year. Book your hard rubbish on the <a href="https://www.merri-bek.vic.gov.au/living-in-merri-bek/waste-and-recycling/bins-and-collection-services/hard-waste-collection/" target="blank">Merri-Bek Council website</a>. Please place them on the nature strip the night before your collection day with the hard rubbish collection label that you'll receive in the mail.</li>
            <li>Can be taken to <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for a fee.</li>
        </ul>
    `;

    } else if (type === 'glass' && condition === 'broken') {
            return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                    <li>Should be placed in the regular rubbish bin.</li>
                </ul>
            `;
            
    } else if (type === 'glass' && condition === 'nbroken') {
            return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                    <li>Should be placed in the glass recycling bin.</li>
                </ul>
            `;

    } else if (type === 'building') {
            return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                    <li>Some building material (such as bricks) can be useful, and might be able to be donated via local Facebook groups such as <a href="https://www.facebook.com/groups/1039086312950286" target="blank">Hard Rubbish Rescue Merri-bek (Moreland)</a>, or local Karma network, such as <a href="https://www.facebook.com/groups/281961012221705" target="blank">Coburg Good Karma Network</a>.</li>
                    <li>Are accepted for hard rubbish collection. You are eligible for two hard rubbish collections per calendar year. Book your hard rubbish on the <a href="https://www.merri-bek.vic.gov.au/living-in-merri-bek/waste-and-recycling/bins-and-collection-services/hard-waste-collection/" target="blank">Merri-Bek Council website</a>. Please place them on the nature strip the night before your collection day with the hard rubbish collection label that you'll receive in the mail.</li>
                    <li>Can be taken to <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for a fee.</li>
                </ul>
            `;

    } else if (type === 'batteries') {
        return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                    <li>Can be taken to <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for free.</li>
                    <li>Can be recycled at <a href="https://www.bunnings.com.au/our-services/in-store/recycling" target="blank">Bunnings</a>, Coles for free.</li>
                </ul>
            `;
    } else if (type === 'cardboard') {
            return `
                    <h3>Search Results</h3>
                    <p>Type: ${type}</p>
                    <p>Condition: ${condition}</p>
                    <p>Here is the information based on your search criteria:</p>
                    <ul>
                        <li>Can be taken to <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for free.</li>
                        <li>Can be recycled at <a href="https://www.visy.com/services/household-recycling" target="blank">VISY</a> for free.</li>
                        <li>Can be placed in the regular recycling bin.</li>
                        <li>Can be donated on various Facebook groups such as <a href="https://www.facebook.com/groups/1039086312950286" target="blank">Hard Rubbish Rescue Merri-bek (Moreland)</a>, or local Karma network, such as <a href="https://www.facebook.com/groups/281961012221705" target="blank">Coburg Good Karma Network</a>.</li>
                    </ul>
                `;
    } else if (type === 'paper') {
        return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                    <li>Should be placed in the regular recycling bin.</li>
                </ul>
            `;   
    } else if (type === 'ink') {
        return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                    <li>Can be recycled at <a href="https://www.officeworks.com.au/information/about-us/recycling" target="blank">Officeworks</a>for free.</li>
                </ul>
            `;    
    } else if (type === 'oil') {
        return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                    <li>Motor oil be taken to <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for a fee.</li>
                    <li>Cooking oil be taken to <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for free.</li>
                </ul>
            `;
    } else if (type === 'styrofoam') {
        return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                    <li>Should be placed in the regular rubbish bin.</li>
                </ul>
            `;                   
    } else if (type === 'aluminium') {
        return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                    <li>Can be taken to <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for free.</li>
                    <li>Aluminium cans can be donated to <a href="https://www.instagram.com/leafcandleco" target="blank">Leaf Candle Co</a> for free. She'll come and collect your cans (even dirty cans) and make candles from them.</li>   
                </ul>
            `;
    } else if (type === 'gas') {
        return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>
                <li>Can be exchanged when you purchase a new BBQ can from places like <a href="https://www.bunnings.com.au/products/outdoor-living/barbecue" target="blank">Bunnings</a>.</li>     
                <li>Can be taken to <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for a fee.</li>
                        
                </ul>
            `;   
    } else if (type === 'tyres') {
        return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>   
                <li>Can be taken to <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for a fee.</li>
                        
                </ul>
            `;
    } else if (type === 'paint') {
        return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>Here is the information based on your search criteria:</p>
                <ul>   
                <li>Can be taken to <a href="https://www.darebin.vic.gov.au/Waste-environment-and-climate/Resource-Recovery-Centre-Tip/What-we-do-and-dont-accept" target="blank">Darebin Resource Recovery Centre</a> for free.</li>
                <li>Can be taken to a <a href="https://www.sustainability.vic.gov.au/circular-economy-and-recycling/at-home/dispose-of-household-chemicals-detox-your-home" target="blank">Detox your Home</a> event for free.</li>
                        
                </ul>
            `;    
    } else {
            return `
                <h3>Search Results</h3>
                <p>Type: ${type}</p>
                <p>Condition: ${condition}</p>
                <p>No specific information available for this combination.</p>
            `;
            }
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
        
    // Display the results on the page
    const resultsDiv = document.getElementById('results');
    // resultsDiv.innerHTML = `<p>Searching for: (${type}, ${condition})</p>`;
    resultsDiv.innerHTML = resultsHtml;
    
}
    
// Attach the form submission handler
document.getElementById('search-form').addEventListener('submit', handleSearchFormSubmission);
    
    
    