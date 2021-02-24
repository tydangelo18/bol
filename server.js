// Main Entry File
/// Bring in Express
const express = require(`express`);
/// Bring in MongoDB Connection
const connectDB = require('./config/db');

/// Initialize app variable w/ Express
const app = express();

/// Call the connection
connectDB();

// Initialize Middleware Parser
//// This will allow req.body to be returned to server as JSON object from Raw Body or Input from the client side. 
app.use(express.json({ extended: false }));

/// Access to routes on every request
app.use(`/api/users`, require(`./routes/api/users`));
app.use(`/api/auth`, require(`./routes/api/auth`));

/// Take app variable and listen on port 5000
//// ---> Will look for an env variable called PORT so when deployed it will look for that PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));

/// Test an endpoint to see if server is running with Express API
/// Handle Root Route
app.get(`/`, function (req, res) {
  res.send(`Server Running!`);
});
