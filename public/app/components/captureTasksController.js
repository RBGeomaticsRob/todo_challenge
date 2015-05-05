app.controller('CaptureTasksController', [function(){
  var self = this
  this.tasks = []
  this.taskFilter = {}
  this.addTask = function(task){
    self.tasks.unshift({'desc': task,'createdAt': Date.now(),'completed': false});
    self.loadTask = "";
  };
  this.complete = function($index){
    self.tasks[$index].completed = !self.tasks[$index].completed
  };
  this.filterAll = function(){
    self.taskFilter = {};
    console.log(self.taskFilter)
  };
  this.filterActive = function(){
    self.taskFilter = {'completed': false};
    console.log(self.taskFilter)
  };
  this.filterComplete = function(){
    self.taskFilter = {'completed': true};
    console.log(self.taskFilter)
  };
}]);