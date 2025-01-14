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

        const item = document.getElementById('item').value;
        const type = document.getElementById('type').value;
        const condition = document.getElementById('condition').value;

        const searchCriteria = {
            item: item,
            type: type,
            condition: condition,
        };

        // Process the search criteria (e.g., send to server or display results)
        console.log('Search Criteria:', searchCriteria);

        // Fetch or generate the information based on the search criteria
        const resultsHtml = fetchInformation(searchCriteria);

        // For example, you can display the results on the page
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `<p>Searching for: ${item} (${type}, ${condition})</p>`;
    }

    // Attach the function to the select element
    document.getElementById('type').addEventListener('change', updateConditionOptions);

    // Attach the form submission handler
    document.getElementById('search-form').addEventListener('submit', handleSearchFormSubmission);

