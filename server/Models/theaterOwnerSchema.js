const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const theaterOwnerSchema = new mongoose.Schema({
  name: { 
      type: String, 
      required: true 
    },
  email: { 
      type: String, 
      required: true, 
      unique: true 
    },
  password: { 
      type: String, 
      required: true 
    },
  tokens: [
      { token: 
          { 
              type: String, 
              required: true 
            } 
          }
        ],
  theaters: [
      { type: mongoose.Schema.Types.ObjectId, 
        ref: 'Theater' 
      }
    ]
});

theaterOwnerSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

theaterOwnerSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET);
  this.tokens = this.tokens.concat({ token });
  await this.save();
  return token;
};

const TheaterOwner = mongoose.model('TheaterOwner', theaterOwnerSchema);
module.exports = TheaterOwner;
