import mongoose from 'mongoose';

export const connectDB = async () => {
  mongoose.set('strictQuery', true);
  try {
    mongoose.connect('mongodb://localhost:27017/football');
    console.log('MongoDB Connected'.green.bold);
  } catch (error: any) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};
