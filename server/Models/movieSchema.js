const mongoose = require("mongoose");
const { trim } = require("validator");

const movieSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  trailer: { 
    type: String, 
    required: true 
  }, 
  description: { 
    type: String, 
    required: true 
  },
  genres: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true 
  },
  duration: { 
    type: Number, 
    required: true 
  },
  releaseDate: { 
    type: Date, 
    required: true 
  },
  languages: { 
    type: [String], 
    required: true 
  },
  tags: { 
    type: [String], 
    required: true 
  },
  casts: [
    {
      name: { 
        type: String, 
        required: true 
      },
      image: { 
        type: String, 
        required: true,
        default: "" 
      },
    },
  ],
  isActive: { 
      type: Boolean, 
      default: false 
    }
  
 
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
