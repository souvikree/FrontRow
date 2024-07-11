const jwt = require('jsonwebtoken');
const Admin = require('../Models/adminSchema');

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    console.log('Authorization Header:', authHeader); // Debug log

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Authorization header missing or malformed');
    }

    const token = authHeader.replace('Bearer ', '');
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
    return res.status(401).json({ error: 'Authentication failed' });
  }
};



module.exports = adminAuth;
