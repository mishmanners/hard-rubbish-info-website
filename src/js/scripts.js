// This file contains JavaScript code for client-side functionality, including form validation and dynamic content updates.


// Options for the seach form

document.addEventListener('DOMContentLoaded', function() {
    function updateConditionOptions() {
        const type = document.getElementById('type').value;
        const conditionSelect = document.getElementById('condition');
        conditionSelect.innerHTML = ''; // Clear existing options

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
        } else {
            options = [
                { value: 'good', text: 'Good' },
                { value: 'fair', text: 'Fair' },
                { value: 'poor', text: 'Poor' }
            ];
        }

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.value;
            opt.textContent = option.text;
            conditionSelect.appendChild(opt);
        });
    }

    // Attach the function to the select element
    document.getElementById('type').addEventListener('change', updateConditionOptions);
});


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