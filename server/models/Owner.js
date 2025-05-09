const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
  First_Name: {
    type: String,
    required: true,
    trim: true
  },
  Last_Name: {
    type: String,
    required: true,
    trim: true
  },
  Adress: {
    type: String,
    required: true,
    trim: true
  },
  City: {
    type: String,
    required: true,
    trim: true
  },
  Telephone: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Owner', OwnerSchema);