// export function handleSearchFormSubmission(event) {
    // event.preventDefault();
    
    // const item = document.getElementById('item').value;
    // const condition = document.querySelector('input[name="condition"]:checked').value;
    // const location = document.getElementById('location').value;

    // const searchCriteria = {
    //    item: item,
    //    condition: condition
    //};

    // Process the search criteria (e.g., send to server or display results)
    // console.log('Search Criteria:', searchCriteria);
    
    // Here you can add the logic to send the searchCriteria to the server or handle it as needed

    // Options for the seach form
// }

function updateConditionOptions() {
        const type = document.getElementById('type').value;
        const conditionSelect = document.getElementById('condition');

        // add a console log here so we can see what's happening
        console.log('type:', type);

        let options = [];

        if (type === 'furniture') {
            options = [
                { value: 'good', text: 'Good' },
                { value: 'fair', text: 'Fair' },
                { value: 'poor', text: 'Poor' }
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
                { value: 'good', text: 'Good' },
                { value: 'fair', text: 'Fair' },
                { value: 'poor', text: 'Poor' }
            ];
        } else if (type === 'toys') {
            options = [
                { value: 'good', text: 'Good' },
                { value: 'fair', text: 'Fair' },
                { value: 'poor', text: 'Poor' }
            ];
        } else if (type === 'glass') {
            options = [
                { value: 'broken', text: 'Broken' },
                { value: 'nbroken', text: 'Not Broken' },
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

    // Example of processing the search form submission
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const item = document.getElementById('item').value;
        const condition = document.getElementById('condition').value;
        const location = document.getElementById('location').value;

        const searchCriteria = {
            item: item,
            condition: condition,
            location: location
        };

        // Process the search criteria (e.g., send to server or display results)
        console.log('Search Criteria:', searchCriteria);

        // Here you can add the logic to send the searchCriteria to the server or handle it as needed
    });


// export function initializeSearchForm() {
//    const searchForm = document.getElementById('searchForm');
//    searchForm.addEventListener('submit', handleSearchFormSubmission);
// }