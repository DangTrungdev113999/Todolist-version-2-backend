import TaskModel from '../models/Task.model';

const getAllTask = async (req, res) => {
  try {
    const keyword = req.query.q;

    const listTask = await TaskModel.find({
      title: { $regex: new RegExp(keyword, 'i') },
    })
      .limit(10)
      .sort({ createdAt: -1 })
      .exec();

    res.status(200).json(listTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      createdAt: Date.now(),
    };

    const newTask = await TaskModel.create(data);
    res.status(201).json(newTask);
  } catch (error) {
    res.json(500).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      updatedAt: Date.now(),
    };

    const result = await TaskModel.updateOne({ _id: req.params.id }, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskModel.deleteOne({ _id: id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
};
