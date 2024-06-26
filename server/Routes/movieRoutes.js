// routes/movieRoutes.js

const express = require('express');
const { getActiveMovies, getInactiveMovies } = require('../Controllers/movieController');
const router = express.Router();


// Fetch all active movies
router.get('/admin/movies/active', getActiveMovies);

// Fetch all inactive movies
router.get('/admin/movies/inactive', getInactiveMovies);

module.exports = router;
