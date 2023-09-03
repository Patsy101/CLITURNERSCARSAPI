const mongoose = require('mongoose');

//Cars Schema

const customerSchema = mongoose.Schema({
  Make: { type: String },
  Model: { type: String },
  Year: { type: String },
  Amount: { type: String },
});

//Define and export
module.exports = mongoose.model('Cars', customerSchema);
