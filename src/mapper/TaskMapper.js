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
        if (Array.isArray(task)) {
            return task.map((task) => TaskMapper.TaskResponseDTO(task));
        } else {
            return TaskMapper.TaskResponseDTO(task);
        }
    }
};

export default TaskMapper;
