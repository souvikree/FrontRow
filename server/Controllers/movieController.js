const etag = require('etag');
const mongoose = require('mongoose');


const Movie = require('../Models/movieSchema');
const Showtime= require('../Models/showtimeSchema')

// Fetch all active movies (movies with showtimes and dates)
exports.getActiveMovies = async (req, res) => {
  try {
    const activeMovies = await Movie.find({ isActive: true }).populate('showtimes');
    res.status(200).json(activeMovies);
  } catch (error) {
    console.error('Error fetching active movies:', error);
    res.status(500).json({ error: 'Error fetching active movies' });
  }
};

// Fetch all upcoming movies (movies without showtimes and dates)
exports.getInactiveMovies = async (req, res) => {
  try {
    const inactiveMovies = await Movie.find({ isActive: false, $or: [{ showtimes: { $exists: false } }, { showtimes: [] }, { startdate: { $exists: false } }, { startdate: [] }, { enddate: { $exists: false } }, { enddate: [] }, { times: { $exists: false } }, { times: [] }] });
    res.status(200).json(inactiveMovies);
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    res.status(500).json({ error: 'Error fetching upcoming movies' });
  }
};

// Fetch movie details by ID
exports.getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getMoviesByName = async (req, res) => {
  const { name } = req.params;
  
  try {
    
    const movies = await Movie.find({ name: { $regex: new RegExp(name, 'i') } });

    if (movies.length === 0) {
      return res.status(404).json({ error: 'No movies found' });
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMoviesByGenre = async (req, res) => {
  const { genre } = req.params;

  try {
    const movies = await Movie.find({ genres: { $regex: new RegExp(genre, "i") } }); 
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




exports.getTheatersShowtimesByMovieId = async (req, res) => {
  const movieId = req.params.id;
  const { date } = req.query;

  try {
    if (!date) {
      return res.status(400).json({ error: 'Date query parameter is required' });
    }

    const selectedDate = new Date(date);
    if (isNaN(selectedDate.getTime())) {
      return res.status(400).json({ error: 'Invalid date format' });
    }

    if (!mongoose.Types.ObjectId.isValid(movieId)) {
      return res.status(400).json({ error: 'Invalid movie ID' });
    }

    const showtimes = await Showtime.find({
      movie: new mongoose.Types.ObjectId(movieId),
      startdate: { $lte: selectedDate },
      enddate: { $gte: selectedDate },
    }).populate('theater');

    if (!showtimes.length) {
      return res.status(404).json({ error: 'No showtimes found for the given movie and date' });
    }


    const theatersWithShowtimes = showtimes.map((showtime) => ({
      theater: {
        _id: showtime.theater._id,
        name: showtime.theater.name,
      },
      dates: showtime.times.map((time) => ({
        startdate: showtime.startdate,
        enddate: showtime.enddate,
        times: time,
      })),
    }));

    // Generate ETag based on response content
    const etagValue = etag(JSON.stringify(theatersWithShowtimes));
    res.set('ETag', etagValue);

    res.status(200).json(theatersWithShowtimes);
  } catch (error) {
    console.error('Error fetching theaters and showtimes:', error);
    res.status(500).json({ error: 'Error fetching theaters and showtimes' });
  }
};