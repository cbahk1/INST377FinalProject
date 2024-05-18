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

function displayMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        
        movieElement.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <div class="movie-details">
                <h2>${movie.Title}</h2>
                <p>${movie.Year}</p>
                <p>${movie.Type}</p>
            </div>
        `;
        
        movieList.appendChild(movieElement);
    });
}
