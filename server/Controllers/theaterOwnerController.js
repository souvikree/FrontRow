const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const TheaterOwner = require('../Models/theaterOwnerSchema');
const Theater = require('../Models/theaterSchema');
const Movie = require('../Models/movieSchema');
const Showtime = require('../Models/showtimeSchema');

// Register 
const registerTheaterOwner = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if all required fields are present
      if (!name || !email || !password) {
        return res.status(400).send({ error: 'Name, email, and password are required.' });
      }
  
      const theaterOwner = new TheaterOwner({ name, email, password });
      await theaterOwner.save();
      const token = await theaterOwner.generateAuthToken();
      res.status(201).send({ theaterOwner, token });
    } catch (error) {
        
      res.status(400).send(error);
      console.log(error)
    }
  };
  

// Login 
const loginTheaterOwner = async (req, res) => {
  try {
    const { email, password } = req.body;
    const theaterOwner = await TheaterOwner.findOne({ email });
    if (!theaterOwner) {
      return res.status(404).send({ error: 'Invalid login credentials' });
    }
    const isMatch = await bcrypt.compare(password, theaterOwner.password);
    if (!isMatch) {
      return res.status(404).send({ error: 'Invalid login credentials' });
    }
    const token = await theaterOwner.generateAuthToken();
    res.send({ theaterOwner, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Logout 
const logoutTheaterOwner = async (req, res) => {
  try {
    req.theaterOwner.tokens = req.theaterOwner.tokens.filter(token => token.token !== req.token);
    await req.theaterOwner.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};

// Forgot Password
const forgotPassword = async (req, res) => {
  const {email} = req.body;
  try{
    const theaterOwner = await TheaterOwner.findOne({email});

    if(!theaterOwner){
        return res.status(404).send({ error: 'TheaterOwner not found' });
    }
    const resetToken = crypto.randomBytes(20).toString('hex');
         theaterOwner.resetPasswordToken = resetToken;
         theaterOwner.resetPasswordExpires = Date.now() + 3600000; // 1 hour

         await theaterOwner.save();
        
         const resetUrl = `http://${req.headers.host}/theaterowner/reset/${resetToken}`;

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
            to: theaterOwner.email,
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

// Reset Password
const resetPassword = async (req, res) => {
    const { resetToken } = req.params;
    const { newPassword } = req.body;
  
    try {
      const theaterOwner = await TheaterOwner.findOne({
        resetPasswordToken: resetToken,
        resetPasswordExpires: { $gt: Date.now() },
      });
  
      if (!theaterOwner) {
        return res.status(400).send({ error: 'Password reset token is invalid or has expired' });
      }
  
      // Reset password
      theaterOwner.password = newPassword;
      theaterOwner.resetPasswordToken = undefined;
      theaterOwner.resetPasswordExpires = undefined;
  
      await theaterOwner.save();
  
      res.status(200).send({ message: 'Password reset successful' });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

// Add Theater
const addTheater = async (req, res) => {
  try {
    const { name, location, address } = req.body;
    const theater = new Theater({
      owner: req.theaterOwner._id,
      name,
      location,
      address
    });
    await theater.save();
    req.theaterOwner.theaters.push(theater._id);
    await req.theaterOwner.save();
    res.status(201).send(theater);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all theaters registered by the theater owner
const getTheaters = async (req, res) => {
  try {
    const theaters = await Theater.find({ owner: req.theaterOwner._id });
    res.status(200).send(theaters);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete Theater
const deleteTheater = async (req, res) => {
  try {
    const { theaterId } = req.params;
    const theater = await Theater.findOneAndDelete({ _id: theaterId, owner: req.theaterOwner._id });
    if (!theater) {
      return res.status(404).send({ error: 'Theater not found' });
    }
    req.theaterOwner.theaters = req.theaterOwner.theaters.filter(id => id.toString() !== theaterId);
    await req.theaterOwner.save();
    res.send(theater);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update Theater
const updateTheater = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'location', 'address'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' });
  }

  try {
    const { theaterId } = req.params;
    const theater = await Theater.findOne({ _id: theaterId, owner: req.theaterOwner._id });

    if (!theater) {
      return res.status(404).send({ error: 'Theater not found' });
    }

    updates.forEach(update => (theater[update] = req.body[update]));
    await theater.save();
    res.send(theater);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get Movies (for Theater Owners to select from)
const getMovies = async (req, res) => {
    try {
      const movies = await Movie.find();
      res.status(200).send(movies);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
 
  const addShowtime = async (req, res) => {
    const { movie, theater, startdate, enddate, times } = req.body; // Ensure startdate and enddate are properly destructured

    try {
        console.log('Request Body:', req.body);
    
        // Check if movie exists
        const movieDoc = await Movie.findById(movie);
        if (!movieDoc) {
            console.error('Movie not found for ID:', movie);
            return res.status(404).send({ error: 'Movie not found' });
        }
    
        // Check if theater exists and is owned by the requesting user
        const theaterDoc = await Theater.findOne({ _id: theater, owner: req.theaterOwner._id });
        if (!theaterDoc) {
            console.error('Theater not found or unauthorized:', theater);
            return res.status(404).send({ error: 'Theater not found or you do not have permission to access this theater' });
        }
    
        // Create new Showtime document
        const showtime = new Showtime({
            movie,
            theater,
            startdate, // Ensure startdate and enddate are properly assigned here
            enddate,
            times: times // Assuming times is an array like ["10:00 am", "1:00 pm", "6:00 pm"]
        });
        await showtime.save();
    
        // Link the showtime to the movie
        movieDoc.showtimes.push(showtime._id);
        if (!movieDoc.isActive) {
            movieDoc.isActive = true;
        }
        await movieDoc.save();
    
        res.status(201).send(showtime);
    } catch (error) {
        console.error('Error adding showtime:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};

 
  
  
  

module.exports = {
  registerTheaterOwner,
  loginTheaterOwner,
  logoutTheaterOwner,
  forgotPassword,
  resetPassword,
  addTheater,
  getTheaters,
  deleteTheater,
  updateTheater,
  getMovies,
  addShowtime,
  
};
