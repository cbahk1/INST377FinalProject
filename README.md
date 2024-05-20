# INST377FinalProject
# 

# ExploreMovies

## Description
ExploreMovies is platform designed to allow the user to learn more about movies they are interested in, while getting movie reccomendations. 

We will use the https://www.omdbapi.com/ API to access thousands of movies, shows, and series. 

## Target Browsers
ExploreMovies is designed to be fully responsive and functional across various devices and platforms. The application is optimized for Google Chrome as it is the most commonly used browser. 

## Developer Manual
1. Installation and Dependencies:


   Clone the ExploreMovies repository from GitHub: `git clone git@github.com:cbahk1/INST377FinalProject.git`


 If needed,  navigate to the project directory: `cd INST377FinalProject`

    Install all dependencies using npm: `npm install`


2. Running the Application:


To launch the application, use the Live Server extension in Visual Studio Code. Open Visual Studio Code, then open the project folder. Right-click on the 'index.html' file within the project directory and select 'Open with Live Server' from the context menu. This action will automatically launch the application in your default web browser.


3. API Endpoints:

   - ExploreMovies uses the OMDB API for accessing movie data. Below are the endpoints used in the server application:

      GET /movies/search?q={query}: Allows users to search for movies and TV shows based on the provided query.

GET /movies/{imdbID}: Retrieves detailed information about a specific movie using its IMDb ID.

GET /movies/comments/{imdbID}: Retrieves user comments and reviews for a specific movie identified by its IMDb ID.

GET /movies/trailers/{imdbID}: Retrieves trailers and additional media content for a specific movie identified by its IMDb ID.



4. Known Bugs and Future Development:**

   - Known/potential bugs:

Occasional malfunctioning of the API key, resulting in failed API serach or incomplete movie data retrieval

Inconsistent behavior with rating functionality on mobile devices.



   5. Roadmap for future development:



     - Implement user authentication to allow for personalized recommendations.

     - Enhance search functionality to include filtering options for purpose of UX.

     - Integrate additional APIs to provide more comprehensive movie data.

     - Implement a feature for users to save favorite movies and create watchlists for future use.

