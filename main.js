function apiRequest() {
    const params = {
        access_key: '0010541e02761fd64632dcd518250273'
    };

    const queryString = new URLSearchParams(params).toString();
    const url = `https://api.aviationstack.com/v1/flights?${queryString}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const apiResponse = data;
            if (Array.isArray(apiResponse['results'])) {
                apiResponse['results'].forEach(flight => {
                    if (!flight['live']['is_ground']) {
                        console.log(`${flight['airline']['name']} flight ${flight['flight']['iata']}`,
                            `from ${flight['departure']['airport']} (${flight['departure']['iata']})`,
                            `to ${flight['arrival']['airport']} (${flight['arrival']['iata']}) is in the air.`);
                    }
                });
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


function redirect() {
    window.location.href = "about.html";
}

apiRequest()