// controllers/movieController.js

const Movie = require('../Models/movieSchema');

// Fetch all active movies (movies with showtimes and dates)
exports.getActiveMovies = async (req, res) => {
  try {
    const activeMovies = await Movie.find({ isActive: true, showtimes: { $exists: true, $ne: [] }, dates: { $exists: true, $ne: [] } });
    res.status(200).json(activeMovies);
  } catch (error) {
    console.error('Error fetching active movies:', error);
    res.status(500).json({ error: 'Error fetching active movies' });
  }
};

// Fetch all upcoming movies (movies without showtimes and dates)
exports.getInactiveMovies = async (req, res) => {
  try {
    const inactiveMovies = await Movie.find({ isActive: false, $or: [{ showtimes: { $exists: false } }, { showtimes: [] }, { dates: { $exists: false } }, { dates: [] }] });
    res.status(200).json(inactiveMovies);
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    res.status(500).json({ error: 'Error fetching upcoming movies' });
  }
};

// Fetch movie details by ID
exports.getMovieById = async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    res.status(500).json({ error: 'Error fetching movie details' });
  }
};
