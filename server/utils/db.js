import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.ADMIN_URL;
export const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
