
const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")
const clearCompletedBtn = document.getElementById("clearCompletedBtn")
let tasks = []


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({text : taskText,
                    completed : false
                })
        taskInput.value = ""
        displayTasks()
    }
    
}

function displayTasks() {
    taskList.innerHTML = ""
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type=checkbox id=task-${index} ${task.completed? "checked" : ""}>
                            <label for=task-${index}> ${task.text} </label>`
        li.querySelector("input").addEventListener("change", () => {
            toggleTask(index)
            taskList.appendChild(li)
        })
        taskList.appendChild(li)
    })

}

function toggleTask(index) {
    li = document.getElementById(`task-${index}`)
    if (li.querySelector(input) == checked) {
            tasks[index].completed = true
    }
    
    displayTasks()
}

function clearCompletedTasks() {
    tasks = tasks.filter(tasks => !tasks.completed)
    displayTasks()
}

clearCompletedBtn.addEventListener("click", clearCompletedTasks())
addTaskBtn.addEventListener("click", addTask())

displayTasks()