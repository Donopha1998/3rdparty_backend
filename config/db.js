const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };

    await mongoose.connect(process.env.MONGO_URI, options);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
