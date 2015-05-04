describe('capture', function(){

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('Capture');
  });

  it('can add a todo item to the list', function(){
    element(by.model('taskCtrl.loadTask')).sendKeys('A test Task.');
    element(by.className('form__button--submit')).click();
    var tasks = element.all(by.repeater('task in taskCtrl.tasks'));
    expect(tasks.get(0).getText()).toEqual('A test Task.');
  });

  it('can show newest items at the top of the list', function(){
    element(by.model('taskCtrl.loadTask')).sendKeys('A first Task.');
    element(by.className('form__button--submit')).click();
    element(by.model('taskCtrl.loadTask')).clear().sendKeys('A second Task.');
    element(by.className('form__button--submit')).click();
    element.all(by.className('tasks')).then(function(task){
      expect(task[0].getText()).toEqual('A second Task.')
    });
  });

  it('can mark tasks as completed',function(){
    element(by.model('taskCtrl.loadTask')).sendKeys('A first Task.');
    element(by.className('form__button--submit')).click();
    element(by.className('tasks')).click();
    element.all(by.className('tasks')).then(function(task){
      expect(task[0].getAttribute('class')).toMatch('strikethrough');
    });
  });

  it('can reverse completion of a task',function(){
    element(by.model('taskCtrl.loadTask')).sendKeys('A first Task.');
    element(by.className('form__button--submit')).click();
    element(by.className('tasks')).click();
    element(by.className('tasks')).click();
    element.all(by.className('tasks')).then(function(task){
      expect(task[0].getAttribute('class')).not.toMatch('strikethrough');
    });
  });

});