const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  phone: String,
  company: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Lead = mongoose.model('3rdparty_leads', leadSchema);

module.exports = Lead;
