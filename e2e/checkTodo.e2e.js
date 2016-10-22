var todoListPage = new (require('./pages/todoList.page').TodoListPage)();

describe('Todo check', function() {

  afterEach(function () {
    browser.executeScript('window.localStorage.clear();');
  });

  it('should check a todo', function() {
    browser.get("/");

    todoListPage.newTodo.sendKeys("Orange");
    todoListPage.newTodo.sendKeys(protractor.Key.ENTER);

    var todo = new todoListPage.Todo(todoListPage.todos.first());
    todo.checkbox.click();
    expect(todo.content.getCssValue("text-decoration")).toEqual('line-through');

    browser.sleep(500);
  });

})
