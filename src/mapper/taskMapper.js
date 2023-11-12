const taskMapper = {
  TaskReponseDTO: (task) => {
    return {
      id: task._id,
      title: task.title,
      description: task.description,
      status: task.status,
    };
  },
};

export default taskMapper;
