export function handleSearchFormSubmission(event) {
    event.preventDefault();
    
    const item = document.getElementById('item').value;
    const condition = document.querySelector('input[name="condition"]:checked').value;
    const location = document.getElementById('location').value;

    const searchCriteria = {
        item: item,
        condition: condition,
        location: location
    };

    // Process the search criteria (e.g., send to server or display results)
    console.log('Search Criteria:', searchCriteria);
    
    // Here you can add the logic to send the searchCriteria to the server or handle it as needed
}

export function initializeSearchForm() {
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', handleSearchFormSubmission);
}