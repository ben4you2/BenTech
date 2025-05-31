const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  userId: String,
  name: String,
  phone: String
});
module.exports = mongoose.model('Contact', ContactSchema);