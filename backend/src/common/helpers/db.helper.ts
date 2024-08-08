import mongoose from 'mongoose';

export const connectDB = () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING || '');

  const db = mongoose.connection;

  db.on('error', (err) => {
    console.log('Error while connecting to mongoDB', err);
  });

  db.once('open', () => {
    console.log('Connected successfully to mongoDB');
  });
};
