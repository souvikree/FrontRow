// routes/movieRoutes.js

const express = require("express");
const {
  getActiveMovies,
  getInactiveMovies,
  getMovieById,
  getTheatersShowtimesByMovieId,
  getMoviesByGenre,
  getMoviesByName,
} = require("../Controllers/movieController");
const router = express.Router();

// Fetch all active movies
router.get("/movies/active", getActiveMovies);

// Fetch all inactive movies
router.get("/movies/inactive", getInactiveMovies);
router.get("/movies/:id", getMovieById);
router.get("/movies/name/:name", getMoviesByName);
router.get('/movies/:id/showtimes', getTheatersShowtimesByMovieId);
router.get("/movies/genre/:genre", getMoviesByGenre);

module.exports = router;
