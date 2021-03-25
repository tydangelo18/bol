// User Model
/// Bring in Mongoose
const mongoose = require(`mongoose`);

/// User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // No two emails may be the same for accounts
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

/// Create an export the Model for use
module.exports = User = mongoose.model('user', UserSchema);
