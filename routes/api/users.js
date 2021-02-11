// Handles User Registration & Adding Users
/// Bring in Express
const express = require(`express`);
/// Bring in Express router
const router = express.Router();

/// Routes

//// TEST ROUTE
// 1) @route GET api/users
// 2) @desc Test Route
// 3) @access Public (doesn't need authentication to view)
router.get(`/`, (req, res) => res.send(`User Route`));

// Export Routes
module.exports = router;
