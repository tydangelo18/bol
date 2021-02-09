// Main Entry File
/// Bring in Express
const express = require(`express`);
/// Initialize app variable w/ Express
const app = express();
/// Take app variable and listen on port 5000
//// ---> Will look for an env variable called PORT so when deployed it will look for that PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
/// Test an endpoint to see if server is running with Express API
app.get(`/`, function (req, res) {
  res.send(`Server Running!`);
});
