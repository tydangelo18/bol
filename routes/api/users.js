// Handles User Registration & Adding Users
/// Bring in Express
const express = require(`express`);
/// Bring in Express router
const router = express.Router();
// Bring in bcrypt
const bcrypt = require('bcryptjs');
// Bring in JSONWEBTOKEN
const jwt = require('jsonwebtoken');
// Bring in Express Validator
const { check, validationResult } = require(`express-validator`);
// Bring in User Model
const User = require('../../models/User');
const config = require('config');

/// Routes

//// TEST ROUTE
// 1) @route GET api/users
// 2) @desc Test Route
// 3) @access Public (doesn't need authentication to view)
router.get(`/`, (req, res) => res.send(`User Route`));

// AUTH ROUTE
// 1) @route POST api/users
// 2) @desc Register a new user
// 3) @access Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // If input from the client side is invalid based on the above criteria, a response will be sent to client side
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // Create a query with Mongoose to find a User
    try {
      let user = await User.findOne({ email });
      // Checks if user already exists
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists ' }] });
      }

      // Create a new instance of a User with Mongoose
      user = new User({
        name,
        email,
        password,
      });

      // Encrypt the password
      const salt = await bcrypt.genSalt(10);

      // Hash the password
      user.password = await bcrypt.hash(password, salt);

      // Save User to db
      await user.save();

      // Return JWT
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get(`jwtSecret`),
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

// Export Route
module.exports = router;
