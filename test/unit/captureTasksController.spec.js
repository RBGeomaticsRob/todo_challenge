describe('CaptureTasksController', function(){
  beforeEach(module('Capture'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('CaptureTasksController');
  }));

  it('initialises with an empty task load', function(){
    expect(ctrl.loadTask).toBeUndefined();
  });
});