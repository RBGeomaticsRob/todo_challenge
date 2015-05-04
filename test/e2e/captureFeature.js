describe('capture', function(){
  it('has a title', function(){
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Capture');
  });

  it('can add a todo item to the list', function(){
    element(by.model('taskCtrl.loadTask')).sendKeys('A test Task.');
    element(by.className('form__button--submit')).click();
    expect(element.all(by.repeater('task in taskCtrl.tasks').get(0).getText())).toEqual('A test Task.');
  });

});