// Handles getting profiles, adding profiles, updating profiles, and deleting profiles associated with a user.
/// Bring in Express
const express = require(`express`);
/// Bring in request
const request = require(`request`);
/// Bring in Express router
const router = express.Router();
const config = require('config');
// Bring in Auth Middleware
const auth = require(`../../middleware/auth`);
// Bring in User and Profile Models
const User = require('../../models/User');
const Profile = require('../../models/Profile');
// Bring in Express Validator
const { check, validationResult } = require(`express-validator`);

//@route GET api/profile/me
//@desc Get logged in user's profile
//@access Private
router.get(`/me`, auth, async (req, res) => {
    try {
        // req.user.id = objectId of the user that comes in with the token
        // .populate() brings in fields from the user model and puts it into the profile model
        const profile = await Profile.findOne({ user: req.user.id }).populate(`user`, [`name`]);

        // Check if no profile
        if (!profile) {
            return res.status(400).json({ msg: `There is no profile for this user` });
        }

        // Check if profile
        res.json(profile);
    } catch(err) {
        console.error(err.message);
        res.status(500).send(`Server Error`);
    }
});

// Export to use route externally
module.exports = router; 
