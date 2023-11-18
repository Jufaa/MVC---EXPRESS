const TaskMapper = {
  TaskResponseDTO: (task) => {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
    };
  },
  toResponseDTO(task) {
    return Array.isArray(task)
      ? task.map((task) => TaskMapper.TaskResponseDTO(task))
      : TaskMapper.TaskResponseDTO(task);
  },
};

export default TaskMapper;
