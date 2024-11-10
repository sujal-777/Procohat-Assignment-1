import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Construct full URI with DB_NAME
    const dbURI = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`;
    
    // Connect to MongoDB
    const connectInstance = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB connected! DB Host: ${connectInstance.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process on connection failure
  }
};

export default connectDB;
