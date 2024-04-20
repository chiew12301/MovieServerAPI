// Import the axios library
const axios = require('axios')
const movieList = require("../data/movies.json").movies;

const getMovies = (done) => {
  // get all movies
  return done(null, JSON.stringify(movieList));
}

const getMoviesById = (movieId, done) => {
  // get movie by id
  const mov = movieList.find(p => p.id === movieId);
  if (mov) {
    done(null, JSON.stringify(mov));
  } else {
    done(`Movie not found...`, null);
  }
}

const saveMovie = function (newMovie, done) {
  // save the details of a movie read from the request body
  movieList.push(newMovie);
  done(null, JSON.stringify(movieList));
}

const updateMovie = function (movieId, updateData, done) {
  // update movie details of a specific movie
  const index = movieList.findIndex(p => p.id === movieId);
  if (index !== -1) {
    movieList[index] = updateData;
    done(null, JSON.stringify(movieList));
  } else {
    done(`Movie not found...`, null);
  }
}

const deleteMovieById = function (movieId, done) {
  // delete a specific movie 
  const index = movieList.findIndex(p => p.id === movieId);
  if (index !== -1) {
    movieList.splice(index, 1);
    done(null, JSON.stringify(movieList));
  } else {
    done(`Movie not found...`, null);
  }
}



module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
}
