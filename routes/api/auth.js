// Handles getting a JWT for authenticating users
/// Bring in Express
const express = require(`express`);
/// Bring in Express router
const router = express.Router();
// Bring in Auth Middleware
const auth = require('../../middleware/auth');
// Bring in User Model
const User = require('../../models/User');

/// Routes

// 1) @route GET api/users
// 2) @desc Get a User
// 3) @access Public (doesn't need authentication to view)
router.get(`/`, auth, async (req, res) => {
  try {
    // Make a call to the Database to the specific user trying to send a request
    // .select('-password') leaves off the password in the data
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server Error`);
  }
});

// Export Routes
module.exports = router;
