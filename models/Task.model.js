import mongoose from 'mongoose';

const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: { type: String, trim: true, required: true },
  description: String,
  status: { type: Number, default: 1 },
});

const Task = mongoose.model('task', TaskSchema);

export default Task;
