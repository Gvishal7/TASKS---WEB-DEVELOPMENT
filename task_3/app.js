const taskForm = document.querySelector('#taskForm');
const taskList = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML =
            ` <span>${task.name}</span>
            <span>
                <button onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </span> `;
        if (task.completed) {
            taskItem.classList.add('completed');
        }
        taskList.appendChild(taskItem);
    });
}

function addTask(event) {
    event.preventDefault();
    const name = taskNameInput.value.trim();
    if (name === '') {
        alert('Task name cannot be empty!');
        return;
    }
    const newTask = {
        name,
        completed: false
    };
    tasks.push(newTask);
    taskForm.reset();
    renderTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    const newName = prompt('Enter new task name:', tasks[index].name);
    if (newName !== null) {
        tasks[index].name = newName.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

taskForm.addEventListener('submit', addTask);

renderTasks();
