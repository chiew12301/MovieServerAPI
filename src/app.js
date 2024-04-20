// Import the required dependencies
const http = require("http");
const moviesService = require("./moviesService");
const getRequestData = require("./utils");

// Define the port at which the application will run
const PORT = 5000;

// Define the server
const server = http.createServer(async (req, res) => {
  const { url, method } = req;
  if (method  === "GET" && url.pathname === "/movies") {
    // Get all movies
    const movies = await moviesService.getMovies();
    res.statusCode = 200;
    res.end(JSON.stringify(movies));
  } else if (method  === "GET" && url.pathname.startsWith("/movies/")) {
    // Get a movie with specified id
    const movieId = url.pathname.split("/")[2];
    const movie = await moviesService.getMoviesById(movieId);
    if (movie) {
      res.statusCode = 200;
      res.end(JSON.stringify(movie));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Movie not found" }));
    }
  } else if (method  === "POST" && url.pathname === "/movies") {
    // Save movie details
    parseRequestBody(req, async (data) => {
      const newMovie = await moviesService.saveMovie(data);
      res.statusCode = 201;
      res.end(JSON.stringify(newMovie));
    });
  } else if (method  === "PUT" && url.pathname.startsWith("/movies/")) {
    // Update a specific movie
    const movieId = url.pathname.split("/")[2];
    parseRequestBody(req, async (data) => {
      const updatedMovie = await moviesService.updateMovie(movieId, data);
      if (updatedMovie) {
        res.statusCode = 200;
        res.end(JSON.stringify(updatedMovie));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Movie not found" }));
      }
    });
  } else if (method === "DELETE" && url.pathname.startsWith("/movies/")) {
    // Delete a specific movie
    const movieId = url.pathname.split("/")[2];
    const deletedMovie = await moviesService.deleteMovieById(movieId);
    if (deletedMovie) {
      res.statusCode = 200;
      res.end(JSON.stringify(deletedMovie));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Movie not found" }));
    }
  } else {
    // If no route present, capture in the else part
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});
// listen to the server on the specified port
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
server.on("error", (error) => {
  if (error.code === "EADRINUSE") {
    console.log("Port already in use");
  }
});