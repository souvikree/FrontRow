
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const Admin = require('../Models/adminSchema');
const Movie = require("../Models/movieSchema")

// Register new admin
const registerAdmin = async (req, res) => {
  const admin = new Admin(req.body);

  try {
    await admin.save();
    const token = await admin.generateAuthToken();
    res.status(201).send({ admin, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Admin login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findByCredentials(email, password);
    const token = await admin.generateAuthToken();
    res.send({ admin, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};


const addMovie = async (req, res) => {
    const movie = new Movie(req.body);
  
    try {
      await movie.save();
      res.status(201).send(movie);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  console.log(addMovie)
  
  // Delete movie
  const deleteMovie = async (req, res) => {
    const { movieId } = req.params;
  
    try {
      const movie = await Movie.findByIdAndDelete(movieId);
  
      if (!movie) {
        return res.status(404).send({ error: 'Movie not found' });
      }
  
      res.send(movie);
    } catch (error) {
      res.status(500).send(error);
    }
  };


  const getAllMovies = async (req, res) => {
    try {
      const movies = await Movie.find(); 
      res.status(200).json(movies); 
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  };
  
  // Function to get movies by genre
  const getMoviesByGenre = async (req, res) => {
    const { genre } = req.params; 
  
    try {
      const movies = await Movie.find({ genres: genre }); 
      res.status(200).json(movies); 
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  };
  

  const forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
      const admin = await Admin.findOne({ email });
  
      if (!admin) {
        return res.status(404).send({ error: 'Admin not found' });
      }
  
      // Generate password reset token
      const resetToken = crypto.randomBytes(20).toString('hex');
      admin.resetPasswordToken = resetToken;
      admin.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  
      await admin.save();
  
      // Send email with password reset link
      const resetUrl = `http://${req.headers.host}/admin/reset/${resetToken}`;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SECRET_EMAIL,
          pass: process.env.EMAIL_PASS  
        }
      });
  
      await transporter.sendMail({
        to: admin.email,
        subject: 'Password Reset Request',
        html: `You are receiving this because you (or someone else) have requested the reset of the password for your account.<br/><br/>
               Please click on the following link, or paste this into your browser to complete the process:<br/><br/>
               <a href="${resetUrl}">${resetUrl}</a><br/><br/>
               If you did not request this, please ignore this email and your password will remain unchanged.<br/>`,
      });
  
      res.status(200).send({ message: 'Password reset email sent' });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
  
  // Reset password
  const resetPassword = async (req, res) => {
    const { resetToken } = req.params;
    const { newPassword } = req.body;
  
    try {
      const admin = await Admin.findOne({
        resetPasswordToken: resetToken,
        resetPasswordExpires: { $gt: Date.now() },
      });
  
      if (!admin) {
        return res.status(400).send({ error: 'Password reset token is invalid or has expired' });
      }
  
      // Reset password
      admin.password = newPassword;
      admin.resetPasswordToken = undefined;
      admin.resetPasswordExpires = undefined;
  
      await admin.save();
  
      res.status(200).send({ message: 'Password reset successful' });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
  
  module.exports = {
    registerAdmin,
    loginAdmin,
    addMovie,
    deleteMovie,
    getAllMovies,
    getMoviesByGenre,
    forgotPassword,
    resetPassword,
  };


