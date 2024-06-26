const mongoose = require('mongoose');

const movieTheaterScheduleSchema = new mongoose.Schema({
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
  startDate: { 
        type: Date, 
        required: true 
    },
  endDate: { 
        type: Date, 
        required: true 
    },
  showtimes: [{
    startTime: { 
        type: String, 
        required: true 
    },
    endTime: { 
        type: String, 
        required: true 
    }
  }]
});

const MovieTheaterSchedule = mongoose.model('MovieTheaterSchedule', movieTheaterScheduleSchema);

module.exports = MovieTheaterSchedule;
