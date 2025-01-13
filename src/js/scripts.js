// This file contains JavaScript code for client-side functionality, including form validation and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const item = document.getElementById('item-input').value;
            const condition = document.querySelector('input[name="condition"]:checked').value;
            const pickupDate = document.getElementById('pickup-date').value;

            if (validateForm(item, condition, pickupDate)) {
                // Process the form data
                console.log('Form submitted with:', { item, condition, pickupDate });
                // Here you can call the search functionality or send data to the server
            } else {
                alert('Please fill in all fields correctly.');
            }
        });
    }

    function validateForm(item, condition, pickupDate) {
        return item && condition && pickupDate;
    }
});