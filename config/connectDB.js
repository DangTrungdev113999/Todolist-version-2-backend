import mongoose from 'mongoose';
import bluebird from 'bluebird';

const connectDB = () => {
  mongoose.Promise = bluebird;

  const URI =
    'mongodb://todolist-version-2:todolist-version-2@ds359298.mlab.com:59298/heroku_lf4lbdk3';
  return mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
