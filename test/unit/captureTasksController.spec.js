describe('CaptureTasksController', function(){
  beforeEach(module('Capture'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('CaptureTasksController');
  }));

  it('initialises with an empty task load', function(){
    expect(ctrl.loadTask).toBeUndefined();
  });

  it('can add a task to the list', function(){
    ctrl.addTask('A new Task');
    expect(ctrl.tasks[0].desc).toEqual('A new Task')
  });

  it('can date stamp a task', function(){
    ctrl.addTask('A new Task');
    expect(ctrl.tasks[0].createdAt).toEqual(Date.now())
  });
});