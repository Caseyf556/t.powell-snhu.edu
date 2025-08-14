const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/travlr";

const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(MONGO_URI, options);
    console.log(`[${new Date().toISOString()}] MongoDB connected to ${MONGO_URI}`);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] MongoDB connection failed: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
