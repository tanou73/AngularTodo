var todoListPage = new (require('./pages/todoList.page').TodoListPage)();

describe('Todo creation', function() {

  afterEach(function () {
    browser.executeScript('window.localStorage.clear();');
  });

  it('should add a todo', function() {
    browser.get("/");

    todoListPage.newTodo.sendKeys("Orange");
    todoListPage.newTodo.sendKeys(protractor.Key.ENTER);

    expect(todoListPage.todos.count()).toEqual(1);

    todoListPage.newTodo.sendKeys("Banana");
    todoListPage.newTodo.sendKeys(protractor.Key.ENTER);
    expect(todoListPage.todos.count()).toEqual(2);

    browser.sleep(500);
  });

  it('should set the correct content to the added todo', function() {
    browser.get("/");

    todoListPage.newTodo.sendKeys("Orange");
    todoListPage.newTodo.sendKeys(protractor.Key.ENTER);

    var addedTodo = new todoListPage.Todo(todoListPage.todos.first());
    expect(addedTodo.content.getAttribute('value')).toEqual("Orange");
  });

  it('should not add if the same todo already exists', function() {
    browser.get("/");

    todoListPage.newTodo.sendKeys("Orange");
    todoListPage.newTodo.sendKeys(protractor.Key.ENTER);

    expect(todoListPage.todos.count()).toEqual(1);
    browser.sleep(250);

    todoListPage.newTodo.sendKeys("Orange");
    browser.sleep(250);
    todoListPage.newTodo.sendKeys(protractor.Key.ENTER);
    expect(todoListPage.todos.count()).toEqual(1);
  });
})
