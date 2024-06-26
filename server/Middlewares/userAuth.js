const jwt = require('jsonwebtoken');
const User = require('../Models/userSchema'); 

const userAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id, 'tokens.token': token });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    req.token = token;
    req.user = user;
    req.isAuthenticated = true;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = userAuth;
