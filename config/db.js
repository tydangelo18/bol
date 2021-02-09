// Connect to MongoDB
/// Bring in Mongoose
const mongoose = require(`mongoose`);
/// Bring in Config to use global variable
const config = require(`config`);

/// Grab global variable
const db = config.get(`mongoURI`);

/// Connect to DB
//// ---> Use try catch block to catch an error if there is one!
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB! `);
  } catch (err) {
    // Output error message to the console
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

// Export the Connection
module.exports = connectDB;
