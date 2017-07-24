'use strict';

var task = require('vsts-task-lib/task');

function HelloTask(name) {
  this.name = name;
}

HelloTask.prototype.greet = function () {
  return 'Hello ' + this.name + '!';
};

var helloTask = new HelloTask(task.getInput('name'));
var connectedServiceName = task.getInput('ConnectedServiceName', true);
var webAppName = task.getInput('WebAppName', true);
console.log(helloTask.greet());
console.log(connectedServiceName);
console.log(webAppName);

module.exports = HelloTask;
