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

  it('can display only the active tasks',function(){
    element(by.model('taskCtrl.loadTask')).sendKeys('A first Task.');
    element(by.className('form__button--submit')).click();
    element(by.className('tasks')).click();
    element(by.className('filters__button--active')).click();
    expect(element(by.css('.tasks')).isPresent()).toBe(false);
  });

  it('can display only the completed tasks',function(){
    element(by.model('taskCtrl.loadTask')).sendKeys('A first Task.');
    element(by.className('form__button--submit')).click();
    element(by.className('filters__button--complete')).click();
    expect(element(by.css('.tasks')).isPresent()).toBe(false);
  });

  it('can reset to showing all tasks',function(){
    element(by.model('taskCtrl.loadTask')).sendKeys('A first Task.');
    element(by.className('form__button--submit')).click();
    element(by.className('tasks')).click();
    element(by.className('filters__button--active')).click();
    element(by.className('filters__button--all')).click();
    expect(element(by.css('.tasks')).isPresent()).toBe(true);
  });

  it('displays the total tasks outstanding', function(){
    element(by.model('taskCtrl.loadTask')).sendKeys('A first Task.');
    element(by.className('form__button--submit')).click();
    element(by.model('taskCtrl.loadTask')).clear().sendKeys('A second Task.');
    element(by.className('form__button--submit')).click();
    expect(element(by.className('total')).getText()).toEqual('2 Tasks Outstanding - Click to Complete')
  });

});