const jwt = require('jsonwebtoken');
const Admin = require('../Models/adminSchema');

const adminAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      throw new Error('Authorization header missing');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!admin) {
      throw new Error('Admin not found');
    }

    req.token = token;
    req.admin = admin;
    next();
  } catch (error) {
    console.error('Error in adminAuth middleware:', error);
    res.status(401).send({ error: 'Authentication failed' });
  }
};

module.exports = adminAuth;
