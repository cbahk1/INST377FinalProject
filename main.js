
function apiRequest() {
    fetch('http://api.aviationstack.com/v1/flights?access_key=0010541e02761f')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        // Handle the data from the response
        console.log(data); // For example, log the data to the console
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}



function redirect() {
    window.location.href = "about.html";
}

apiRequest()