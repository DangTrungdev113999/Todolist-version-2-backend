import mongoose from 'mongoose';

const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: { type: String, trim: true, required: true },
  description: String,
  status: { type: Number, default: 1 },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null },
});

const Task = mongoose.model('task', TaskSchema);

export default Task;
