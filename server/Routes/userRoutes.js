const express = require('express');
const router = express.Router();



const { getAllMovies, getMoviesByGenre, loginUser, registerUser, getUserProfile, logoutUser } = require('../Controllers/userController');
const userAuth = require('../Middlewares/userAuth');


router.post('/register', registerUser);


router.post('/login', loginUser);
router.post('/logout', userAuth, logoutUser);

router.get('/profile', userAuth,  getUserProfile);


router.get('/movies', getAllMovies); //userAuth


router.get('/movies/genre/:genre',  getMoviesByGenre); //userAuth

module.exports = router;
