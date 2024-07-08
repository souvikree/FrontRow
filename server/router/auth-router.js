// routes/auth.js

import express from 'express';
import { login, register } from '../controller/auth-controller.js';
import { addMovie } from '../controller/movie-controller.js';
import { deleteMovie, getAllMovies, updateMovie } from '../controller/manage-controller.js';




const router = express.Router();

router.post('/', login);
router.post('/register', register);
router.post('/movie', addMovie);
router.get('/movies', getAllMovies);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

export default router;
