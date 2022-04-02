// Click listeners for the buttons
document.getElementById('button1').addEventListener('click', loadCustomer);

// Load single customer
function loadCustomer(e) {

    // Open a http request instance
    const xhr = new XMLHttpRequest();

    // Make the fetch request
    // arguments are type of request, location of request, and whether async request
    xhr.open('GET', 'customer.json', true)

    // When data is returned, load the data to the DOM
    xhr.onload = function() {
        // Check if the status is good before returning data to DOM
        if (this.status === 200) {
            // Prints the stringified data to console
            console.log(this.responseText);

            // Parse the data string into an object
            const customer = JSON.parse(this.responseText);

            // Create template literal to be returned
            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;

            // Set innerHTML of the Customer list location of DOM
            document.getElementById('customer').innerHTML = output;
        }
    }

    // Executes the return of data to DOM/console
    xhr.send();
}
