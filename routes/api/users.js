// Handles User Registration & Adding Users
/// Bring in Express
const express = require(`express`);
/// Bring in Express router
const router = express.Router();
// Bring in Express Validator
const { check, validationResult } = require(`express-validator`);

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
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    // If input from the client side is invalid based on the above criteria, a response will be sent to client side
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Access data from the client side
    console.log(req.body);
    // Send to the client side
    res.send('User Route');
  }
);

// Export Routes
module.exports = router;
