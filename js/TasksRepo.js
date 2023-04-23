class TasksRepo {
    tasks = [];

    constructor() {
    }

    async fetchTasks() {
        const response = await fetch(`${API_URL}/tasks`);

        if (response.ok) {
            this.tasks = response.json();
        } else {
            alert('Произошла ошибка');
        }
    }

    async createTask(name, categoryId) {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            body: {
                name,
                categoryId
            }
        });

        if (response.ok) {
            const newTask = response.json();
            this.tasks.push(newTask);
        } else {
            alert('Произошла ошибка');
        }
    }

    async checkTask(id) {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'PUT',
            body: {
                id
            }
        });

        if (response.ok) {
            const updatedTask = response.json();
            const task = this.tasks.find(task => updatedTask.id === task.id);

            if (task) {
                task.completed = updatedTask.completed;
            }
        } else {
            alert('Произошла ошибка');
        }
    }

    async renameTask(id, newName) {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'PUT',
            body: {
                id,
                name: newName
            }
        });

        if (response.ok) {
            const updatedTask = response.json();
            const task = this.tasks.find(task => updatedTask.id === task.id);

            if (task) {
                task.name = updatedTask.name;
            }
        } else {
            alert('Произошла ошибка');
        }
    }

    async deleteTask(id) {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'DELETE',
            body: {
                id
            }
        });

        if (response.ok) {
            this.tasks = this.tasks.filter(task => task.id === id);
        } else {
            alert('Произошла ошибка');
        }
    }
}

const tasksRepo = new TasksRepo();
