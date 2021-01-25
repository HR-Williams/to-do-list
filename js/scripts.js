// Business Logic for List
function List() {
  this.tasks = {};
  this.currentId = 0;
}

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId
}

List.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
}

List.prototype.deleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
}

// Businss Logic for Tasks

function Task(name, details, done) {
  this.name = name;
  this.details = details;
  this.done = done;
}

Task.prototype.taskDone = function() {
  
}