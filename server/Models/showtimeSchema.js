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
  dates: [{
    date: { 
        type: Date, 
        required: true 
      },
    times: [String]  //  ["10:00 am", "1:00 pm", "6:00 pm"]
  }]
});

const Showtime = mongoose.model('Showtime', showtimeSchema);

module.exports = Showtime;
