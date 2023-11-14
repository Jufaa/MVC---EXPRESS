class TaskDTO {
    constructor(id, title, description, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }

    static build(data) {
        const taskDTO = new TaskDTO(
            data.id,
            data.title,
            data.description,
            data.status
        );
        TaskDTO.validate(taskDTO);
        return taskDTO;
    }

    static validate(taskDTO) {
        if (taskDTO.title == null || taskDTO.title === "") {
            throw new Error("Title is required");
        }
        if (taskDTO.description == null || taskDTO.description === "") {
            throw new Error("Description is required");
        }
        if (taskDTO.status == null || taskDTO.status === "") {
            throw new Error("Status is required");
        }
    }
}





export default TaskDTO;
