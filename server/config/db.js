const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/momento_db', {
      serverSelectionTimeoutMS: 1500
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`\n[Momento warning] Local MongoDB not running on port 27017.`);
    console.warn(`[Momento info] Running in Mock-Memory Sandbox Mode. Live database operations will fall back to memory.\n`);
  }
};

module.exports = connectDB;
