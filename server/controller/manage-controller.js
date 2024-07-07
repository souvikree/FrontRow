import Movie from '../model/Movie-model.js';
import mongoose from 'mongoose';

// Function to fetch all movies
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json({ movies });
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ message: 'Error fetching movies' });
  }
};

// Function to update a movie
export const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, director, releaseDate, trailerLink, moviePoster, castDetails } = req.body;

  try {
    // Validate ObjectId format for id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid movie ID' });
    }

    // Find and update movie
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { title, director, releaseDate, trailerLink, moviePoster, castDetails },
      { new: true, runValidators: true }
    );

    // Check if movie was found and updated
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Send success response with updated movie data
    res.json({ message: 'Movie updated successfully', movie: updatedMovie });
  } catch (error) {
    console.error('Error updating movie:', error.message);
    res.status(500).json({ message: 'Error updating movie' });
  }
};

// Function to delete a movie
export const deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete movie by id
    const deletedMovie = await Movie.findByIdAndDelete(id);

    // Check if movie was found and deleted
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Send success response with deleted movie data
    res.json({ message: 'Movie deleted successfully', movie: deletedMovie });
  } catch (error) {
    console.error('Error deleting movie:', error);
    res.status(500).json({ message: 'Error deleting movie' });
  }
};
