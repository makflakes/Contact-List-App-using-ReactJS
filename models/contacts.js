const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  
});

const Exercise = mongoose.model('Exercise', contactSchema);

module.exports = Exercise;