
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', function () {
        const query = searchInput.value.trim();
        if (query) {
            searchMovies(query);
        }
    });
    document.getElementById('yesButton').addEventListener('click', function() {
        console.log("true clicked");
        submitFeedback(true);
    });
    
    document.getElementById('noButton').addEventListener('click', function() {
        console.log("false clicked");
        submitFeedback(false);
    });
    
});

function searchMovies(query) {
    const apiKey = '5914722f'; 
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}&page=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovies(data.Search);
            } else {
                alert(data.Error);
            }
            console.log(data); 
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    const moviesToShow = movies.slice(0, 3);

    moviesToShow.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.addEventListener('click', function () {
            fetchTrailer(movie.imdbID);
        });

        movieElement.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <div class="movie-details">
                <h2>Title: ${movie.Title}</h2>
                <h3>Year: ${movie.Year}</h3>
                <h3>Awards: ${movie.Awards}</h3>
                <p>Plot: ${movie.Plot}</p>
                <p>IDMB ID: ${movie.imdbID}</p>
            </div>
        `;

        movieList.appendChild(movieElement);
    });
}

//npm start, sudo lsof -i :3000 kill -9 XXXX
//
function submitFeedback(liked) {
    console.log("Feedback went through test")
    fetch('http://127.0.0.1:3000/feedback',  {
    // fetch('/feedback', {
        method: 'POST',
        body: JSON.stringify({ 'isLiked': liked }) 
    })
    .then(response => response.json())
    .then(data => {
        // alert(data.message); 
        alert("Thank you for your feedback.");
    })
    .catch(error => console.error('Error', error));
}