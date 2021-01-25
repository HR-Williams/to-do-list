// Business Logic for List
function List() {
  this.tasks = {};
}

List.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
}

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId
}

// Businss Logic for Tasks

function Task(name, details, done) {
  this.name = name;
  this.details = details;
  this.done = done;
}

Task.prototype.taskDone = function() {
  
}