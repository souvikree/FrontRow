const jwt = require('jsonwebtoken');
const User = require('../Models/userSchema');

const userAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      throw new Error('No token provided');
    }
    console.log('Token from header:', token); // Log the token from the header

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded); // Log the decoded token

    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
    console.log('User found:', user); // Log the user found

    if (!user) {
      throw new Error('User not found');
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    console.error('Auth error:', error.message); // Log the error message
    res.status(401).json({ message: 'Please authenticate' });
  }
};


module.exports = userAuth;
