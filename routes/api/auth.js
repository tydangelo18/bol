// Handles getting a JWT for authenticating users
/// Bring in Express
const express = require(`express`);
/// Bring in Express router
const router = express.Router();
// Bring in Auth Middleware
const auth = require('../../middleware/auth');
// Bring in User Model
const User = require('../../models/User');
// Bring in JSONWEBTOKEN
const jwt = require('jsonwebtoken');
// Bring in bcrypt
const bcrypt = require('bcryptjs');
// Bring in Express Validator
const { check, validationResult } = require(`express-validator`);
const dotenv = require('dotenv');
dotenv.config();

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

// Login ROUTE
// 1) @route POST api/auth
// 2) @desc Authenticate a user and get token
// 3) @access Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // If input from the client side is invalid based on the above criteria, a response will be sent to client side
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure the req.body for easier access below
    const { email, password } = req.body;

    // Create a query with Mongoose to find a User
    try {
      let user = await User.findOne({ email });
      // Checks if user does not exist
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials ' }] });
      }

      // Compare plain text password from client side and compare it to the encrypted password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials ' }] });
      }

      // Return JWT
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      // Send to the client side
      res.status(500).send(`Server Error`);
    }
  }
);

// Export Routes
module.exports = router;
