const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
  name: { 
      type: String, 
      required: true 
    },
  location: { 
      type: String, 
      required: true 
    },
  owner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'TheaterOwner', 
    required: true 
  }
});

const Theater = mongoose.model('Theater', theaterSchema);

module.exports = Theater;
