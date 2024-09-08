// Main Entry File
/// Bring in Express
const express = require(`express`);
/// Bring in MongoDB Connection
const dotenv = require("dotenv");
dotenv.config();

/// Initialize app variable w/ Express
const app = express();

// DB
// Connect to MongoDB
/// Bring in Mongoose
const mongoose = require(`mongoose`);

// const uri = process.env.MONGO_URI;
/// Connect to DB
//// ---> Use try catch block to catch an error if there is one!
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://teddl18:fx8FycewWGbYWCwp@bol0.jzbnh.mongodb.net/?retryWrites=true&w=majority&appName=bol0", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
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

/// Call the connection
connectDB();

// Initialize Middleware Parser
//// This will allow req.body to be returned to server as JSON object from Raw Body or Input from the client side.
app.use(express.json({ extended: false }));

/// Access to routes on every request
app.use(`/api/users`, require(`./routes/api/users`));
app.use(`/api/auth`, require(`./routes/api/auth`));
app.use(`/api/profile`, require(`./routes/api/profile`));
app.use(`/api/games`, require(`./routes/api/games`));

/// Take app variable and listen on port 5001
//// ---> Will look for an env variable called PORT so when deployed it will look for that PORT
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
