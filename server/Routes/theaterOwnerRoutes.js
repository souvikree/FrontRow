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
  getTheaters,

} = require("../Controllers/theaterOwnerController");
const theaterOwnerAuth = require("../Middlewares/theaterOwnerAuth");

router.post("/register", registerTheaterOwner);
router.post("/", loginTheaterOwner);
router.post("/logout", theaterOwnerAuth, logoutTheaterOwner);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);
router.post("/theaters", theaterOwnerAuth, addTheater);
router.get('/showtheaters', theaterOwnerAuth, getTheaters);
router.delete("/theaters/delete/:theaterId", theaterOwnerAuth, deleteTheater);
router.patch("/theaters/update/:theaterId", theaterOwnerAuth, updateTheater);
router.get('/theaters/movies',theaterOwnerAuth , getMovies);
router.post('/showtimes', theaterOwnerAuth, addShowtime);

module.exports = router;
