const jwt = require('jsonwebtoken');
const TheaterOwner = require('../Models/theaterOwnerSchema');

const theaterOwnerAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const theaterOwner = await TheaterOwner.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!theaterOwner) {
      throw new Error();
    }

    req.token = token;
    req.theaterOwner = theaterOwner;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Authentication failed' });
  }
};

module.exports = theaterOwnerAuth;
