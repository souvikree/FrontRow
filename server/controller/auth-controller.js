// controllers/auth.js

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/user-model.js'; // Assuming your model is in user-model.js

const JWT_SECRET = 'your_jwt_secret_key';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('User does not exist');
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in user');
  }
};

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT
    const token = jwt.sign({ userId: newUser._id }, 'your_jwt_secret_key', {
      expiresIn: '1h',
    });

    res.status(201).json({ token, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user' });
  }
};

