import express from 'express';

import taskRouter from '../services/task.services';

const router = express.Router();

router
  .route('/')
  .get(taskRouter.getAllTask)
  .post(taskRouter.createTask);

router
  .route('/:id')
  .put(taskRouter.updateTask)
  .delete(taskRouter.deleteTask);

export default router;
