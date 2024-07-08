const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
  movie: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Movie', 
    required: true 
  },
  theater: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Theater', 
    required: true 
  },
  startdate: { 
    type: Date, 
    required: true 
  },
  enddate: { 
    type: Date, 
    required: true 
  },
  times: [{
    type: String,
    required: true
  }]
});

const Showtime = mongoose.model('Showtime', showtimeSchema);

module.exports = Showtime;
