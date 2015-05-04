app.controller('CaptureTasksController', [function(){
  var self = this
  this.tasks = []
  this.addTask = function(task){
    self.tasks.push({'desc': task,'createdAt': Date.now()});
  }
}]);