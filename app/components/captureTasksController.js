app.controller('CaptureTasksController', [function(){
  var self = this
  this.tasks = []
  this.addTask = function(task){
    self.tasks.unshift({'desc': task,'createdAt': Date.now()});
  }
}]);