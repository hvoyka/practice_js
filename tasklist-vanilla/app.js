
//Define
const form = document.querySelector('#todo-form');
const todoList = document.querySelector('.todo-list');
const clearBtn = document.querySelector('.clear-tasks-btn');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load event listeners
loadEventListeners();

function loadEventListeners(){
   //DOM load event
   document.addEventListener("DOMContentLoaded", LoadTasksFromLC);
   //add task event
   form.addEventListener("submit", addTask);
   //remove item
   todoList.addEventListener("click", removeTask);
   //clear tasks
   clearBtn.addEventListener("click", clearTasks)
   //filter tasks
   filter.addEventListener("keyup", filterTasks)
}
//Load tasks from local storage 
function LoadTasksFromLC(){
   let tasks;
   if(localStorage.getItem("tasks") === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
   }
   tasks.forEach(function(task) {
      const li = document.createElement("li");
      li.className = "todo-item";
      const link =  document.createElement("a");
      link.className = "delete-item";
      link.innerHTML = "<span class='delete-link' title='Delete Item'></span>";

      li.innerHTML = task;
      
      li.appendChild(link);
      todoList.appendChild(li);
   });
}
//add task event
function addTask(e) {
   const li = document.createElement("li");
   li.className = "todo-item";
   if (taskInput.value == "") {
      alert("Add a task");
   } else {
      const link =  document.createElement("a");
      link.className = "delete-item";
      link.innerHTML = "<span class='delete-link' title='Delete Item'></span>";

      li.innerHTML = taskInput.value;
      li.appendChild(link);
      todoList.appendChild(li);

      saveToLC(taskInput.value);
      taskInput.value = "";      
   }
   e.preventDefault();
}
//Save to local storage
function saveToLC (task) {
   let tasks;
   if(localStorage.getItem("tasks") === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
   }
   tasks.push(task);
   localStorage.setItem("tasks", JSON.stringify(tasks));
}
//remove item
function removeTask (e) {
   if(e.target.parentElement.classList.contains('delete-item')){
      if(confirm("Are You Shure?")){
         e.target.parentElement.parentElement.remove();
         //remove from local storage
         removeTaskFromLC(e.target.parentElement.parentElement);
      }
      
   };
}
function removeTaskFromLC(taskItem){
   if(localStorage.getItem("tasks") === null){
      tasks = [];
   } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
   }
   tasks.forEach(function(task, index){
      console.log(taskItem.textContent, task);
      if(taskItem.textContent === task){
         tasks.splice(index, 1);
      };
   });
   localStorage.setItem("tasks", JSON.stringify(tasks));
}

//clear tasks
function clearTasks (e) {
   e.preventDefault;
   while(todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
   }
   //clear local storage
   clearTasksFromLC();
}
 //clear local storage
function clearTasksFromLC () {
   localStorage.clear("tasks");
}
 //filter tasks
function filterTasks (e) {
   const text = e.target.value.toLowerCase();
   document.querySelectorAll(".todo-item").forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
         task.style.display = "block";
      } else {
         task.style.display = "none";
      }
   });
}