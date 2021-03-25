const mongoose = require(`mongoose`);

// Profile Schema
const ProfileSchema = new mongoose.Schema({
  // A reference to the user model so that every profile will associate with a user
  user: {
    // Connect to an id from the user model
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },

  location: {
    type: String,
  },

  handicap: {
    type: Number,
  },

  yearsActive: {
    type: Number,
  },
});

// Export schema for external use
module.exports = Profile = mongoose.model('profile', ProfileSchema);
