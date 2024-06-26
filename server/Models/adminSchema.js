const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email');
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});


adminSchema.pre('save', async function(next) {
  const admin = this;
  
  if (admin.isModified('password')) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }

  next();
});


adminSchema.methods.generateAuthToken = async function() {
  const admin = this;
  const token = jwt.sign({ _id: admin._id.toString() }, process.env.JWT_SECRET);

  admin.tokens = admin.tokens.concat({ token });
  await admin.save();

  return token;
};


adminSchema.statics.findByCredentials = async (email, password) => {
  const admin = await Admin.findOne({ email });

  if (!admin) {
    throw new Error('Unable to login');
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return admin;
};


adminSchema.methods.toJSON = function() {
  const admin = this;
  const adminObject = admin.toObject();

  delete adminObject.password;
  delete adminObject.tokens;

  return adminObject;
};


const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
