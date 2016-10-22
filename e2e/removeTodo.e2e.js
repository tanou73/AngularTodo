var todoListPage = new (require('./pages/todoList.page').TodoListPage)();

describe('Todo removal', function() {

  afterEach(function () {
    browser.executeScript('window.localStorage.clear();');
  });

  it('should remove a todo', function() {
    browser.get("/");

    todoListPage.newTodo.sendKeys("Orange");
    todoListPage.newTodo.sendKeys(protractor.Key.ENTER);
    todoListPage.newTodo.sendKeys("Banana");
    todoListPage.newTodo.sendKeys(protractor.Key.ENTER);
    expect(todoListPage.todos.count()).toEqual(2);
    browser.sleep(500);

    var first = new todoListPage.Todo(todoListPage.todos.first());
    first.deleteIcon.click();
    expect(todoListPage.todos.count()).toEqual(1);
    browser.sleep(500);

    todoListPage.newTodo.sendKeys("Banana");
    todoListPage.newTodo.sendKeys(protractor.Key.ENTER);
    expect(todoListPage.todos.count()).toEqual(2);
    browser.sleep(500);

    new todoListPage.Todo(todoListPage.todos.last()).deleteIcon.click();
    new todoListPage.Todo(todoListPage.todos.last()).deleteIcon.click();
    expect(todoListPage.todos.count()).toEqual(0);
    browser.sleep(500);
  });
})
