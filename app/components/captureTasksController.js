app.controller('CaptureTasksController', [function(){
  var self = this
  this.tasks = []
  this.selectedIndex = 0
  this.addTask = function(task){
    self.tasks.unshift({'desc': task,'createdAt': Date.now(),'completed': false});
  };
  this.complete = function($index){
    self.tasks[$index].completed = !self.tasks[$index].completed
  };
}]);