document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    searchMovies(query);
});

function searchMovies(query) {
    const apiKey = '5914722f'; 
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovies(data.Search);
            } else {
                alert(data.Error);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}


function redirect() {
    window.location.href = "about.html";
}
