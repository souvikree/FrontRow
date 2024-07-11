const express = require("express");
const {
  registerAdmin,
  loginAdmin,
  addMovie,
  deleteMovie,
  forgotPassword,
  resetPassword,
  getAllMovies,
  getMoviesByGenre,
  logoutAdmin,
} = require("../Controllers/adminController");
const adminAuth = require("../Middlewares/adminAuth");
const router = express.Router();

router.post("/admin/register", registerAdmin);

router.post("/admin/login", loginAdmin); 
// router.post('/admin/logout', adminAuth, logoutAdmin);
router.post("/admin/movie/add", adminAuth, addMovie);

router.delete("/admin/movie/:movieId/delete", adminAuth, deleteMovie);
router.get("/admin/movies", adminAuth, getAllMovies);
router.get("/admin/movies/genre/:genre", adminAuth, getMoviesByGenre);

router.post("/admin/forgotpassword", forgotPassword);

router.put("/admin/resetpassword/:resetToken", resetPassword);

module.exports = router;
