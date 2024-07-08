const Movie = require("../Models/movieSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../Models/userSchema");

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    // if (!username || !email || !password) {
    //   return res.status(400).json({ error: 'Username, email, and password are required.' });
    // }
    const user = await User.findOne({ email });
    if (user) {
      res.status(409).json({ Messege: "User already Exist!" });
    } else {
      const newUser = new User({ username, email, password });

      const token = await newUser.generateAuthToken();
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 50000000),
        sameSite: "None",
        secure: true,
        httpOnly: true,
      });
      console.log(token);
      await newUser.save();
      res.status(201).json({ user: newUser, token });
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 50000000),
      sameSite: "None",
      secure: true,
      httpOnly: true,
    });
    console.log(token);
    // res.json({ user, token });
    res.status(202).json({ Messege: "Log in succesfull", user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(400).json({ message: "Invalid credentials" });
  }
};

// Logout User
exports.logoutUser = async (req, res) => {
  try {
    const token = req.token;
    req.user.tokens = req.user.tokens.filter((t) => t.token !== token);
    await req.user.save();
    console.log(token);

    res.cookie("jwt", "", {
      expires: new Date(0),
      sameSite: "None",
      secure: true,
      httpOnly: true,
    });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error logging out:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Movies
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Movies by Genre
exports.getMoviesByGenre = async (req, res) => {
  const { genre } = req.params;

  try {
    const movies = await Movie.find({
      genre: { $regex: new RegExp(genre, "i") },
    });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    console.log("req.user:", req.user); // Log req.user
    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};
