const taskMapper = {
  TaskReponseDTO: (task) => {
    return {
      id: task._id,
      title: task.title,
      description: task.description,
      status: task.status,
    };
  },

  TaskBaseFormatDTO: (taskData) => {
    return {
      title: taskData.title,
      description: taskData.description,
      status: taskData.status,
    };
  },
};

module.exports = taskMapper;
