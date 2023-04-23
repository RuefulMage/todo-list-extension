async function init() {
    await tasksRepo.fetchTasks();
    const tasks = tasksRepo.tasks;
}

init();
