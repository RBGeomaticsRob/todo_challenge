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

  it('can obtain an index to use for class changing', function(){
    ctrl.selectIndex(1)
    expect(ctrl.selectedIndex).toEqual(1)
  });
});