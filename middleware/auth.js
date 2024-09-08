// Bring in JWT
const jwt = require(`jsonwebtoken`);
const dotenv = require('dotenv');
dotenv.config();
// Export a middleware function for implementing into a protected route
module.exports = function (req, res, next) {
  // Get Token from the header
  const token = req.header(`x-auth-token`);

  // Check if the user has no token
  if (!token) {
    return res.status(401).json({ msg: 'No token: authorization denied.' });
  }

  // Verify the token if one exists
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
