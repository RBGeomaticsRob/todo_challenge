describe('capture', function(){
  it('has a title', function(){
    browser.get('http://localhost:8080');
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
    element(by.model('taskCtrl.loadTask')).sendKeys('A second Task.');
    element(by.className('form__button--submit')).click();
    var tasks = element.all(by.repeater('task in taskCtrl.tasks'));
    expect(tasks.get(0).getText()).toEqual('A second Task.');
  });

});