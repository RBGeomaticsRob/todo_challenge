describe('CaptureTasksController', function(){
  beforeEach(module('Capture'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('CaptureTasksController');
  }));

  it('initialises with an empty task load', function(){
    expect(ctrl.loadTask).toBeUndefined();
  });

  it('can add a task to the start of the list', function(){
    ctrl.addTask('A first Task');
    ctrl.addTask('A second Task');
    expect(ctrl.tasks[0].desc).toEqual('A second Task')
  });

  it('can date stamp a task', function(){
    ctrl.addTask('A new Task');
    expect(ctrl.tasks[0].createdAt).toEqual(Date.now())
  });

  it('can complete a task', function(){
    ctrl.addTask('A new Task');
    ctrl.complete(0)
    expect(ctrl.tasks[0].completed).toEqual(true)
  });

  it('can reverse a task completion', function(){
    ctrl.addTask('A new Task');
    ctrl.complete(0)
    ctrl.complete(0)
    expect(ctrl.tasks[0].completed).toEqual(false)
  });

  it('can change to an active filter', function(){
    ctrl.filterActive();
    expect(ctrl.taskFilter).toEqual({'completed': false})
  });

  it('can change to a completed filter', function(){
    ctrl.filterComplete();
    expect(ctrl.taskFilter).toEqual({'completed': true})
  });

  it('can remove task filters', function(){
    ctrl.filterAll();
    expect(ctrl.taskFilter).toEqual({})
  });


});