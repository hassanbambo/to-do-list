const inputField = document.getElementById("input-field");
const taskList = document.getElementById("task-list");

function addTask() {
    if (inputField.value === "") {
        inputField.placeholder = "You have to type in your task!";
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        taskList.appendChild(li);
        inputField.placeholder = "Type in subsequent Tasks";

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputField.value = "";
    saveTasksData();
}

taskList.addEventListener("click", function(e){
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveTasksData();
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveTasksData();
    }
}, false);

function saveTasksData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showPrevTasks() {
    taskList.innerHTML = localStorage.getItem("data");
}

showPrevTasks();