const express = require("express");
const router = express.Router();

const {
  registerTheaterOwner,
  loginTheaterOwner,
  logoutTheaterOwner,
  forgotPassword,
  resetPassword,
  addTheater,
  deleteTheater,
  updateTheater,
  getMovies,
  addShowtime,

} = require("../Controllers/theaterOwnerController");
const theaterOwnerAuth = require("../Middlewares/theaterOwnerAuth");

router.post("/register", registerTheaterOwner);
router.post("/", loginTheaterOwner);
router.post("/logout", theaterOwnerAuth, logoutTheaterOwner);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);
router.post("/theaters", theaterOwnerAuth, addTheater);
router.delete("/theaters/delete/:theaterId", theaterOwnerAuth, deleteTheater);
router.patch("/theaters/update/:theaterId", theaterOwnerAuth, updateTheater);
router.get('/theaters/movies',theaterOwnerAuth , getMovies);
router.post('/showtimes', theaterOwnerAuth, addShowtime);

module.exports = router;
