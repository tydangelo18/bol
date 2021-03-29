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
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate(`user`, [`name`]);

    // Check if no profile
    if (!profile) {
      return res.status(400).json({ msg: `There is no profile for this user` });
    }

    // Check if profile
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server Error`);
  }
});

//@route POST api/profile
//@desc Create or Update a user's profile
//@access Private
router.post(`/`, [auth], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Need to get the info from the req.body (location, handicap, yearsActive)
  // Destructure req.body for easier access
  const { location, handicap, yearsActive } = req.body;
  // Build Profile object to insert into the DB
  // create an empty object
  const profileFields = {};
  // The User of the profile object will be set to whichever user id is logged in based on which token is currently valid
  profileFields.user = req.user.id;
  // Set req.body object fields to profileFields object fields
  if (location) profileFields.location = location;
  if (handicap) profileFields.handicap = handicap;
  if (yearsActive) profileFields.yearsActive = yearsActive;

  // console.log(profileFields);
  // res.send(`Hello! `);

  try {
    // Look for a Profile that is associated with the user that has the token
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      // Update the profileFields object
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }
    // Create a Profile
    profile = new Profile(profileFields);
    // Save Profile
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server Error`);
  }
});

//@route DELETE api/profile
//@desc Delete a profile and user
//@access Private
router.delete(`/`, auth, async (req, res) => {
  try {
    //@TODO ---> remove user's games and metrics

    // Remove Profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove User
    await User.findByIdAndRemove({ _id: req.user.id });

    res.json({ msg: `User Deleted` });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server Error! `);
  }
});

// Export to use route externally
module.exports = router;
