const express = require('express');
const router = express.Router();



const { getAllMovies, getMoviesByGenre, loginUser, registerUser, getUserProfile, logoutUser } = require('../Controllers/userController');
const userAuth = require('../Middlewares/userAuth');

// User Registration Route
router.post('/register', registerUser);

// User Login Route
router.post('/login', loginUser);
router.post('/logout', userAuth, logoutUser);

router.get('/profile', userAuth,  getUserProfile);

// Get All Movies Route (protected)
router.get('/movies', getAllMovies); //userAuth

// Get Movies by Genre Route (protected)
router.get('/movies/genre/:genre',  getMoviesByGenre); //userAuth

module.exports = router;
