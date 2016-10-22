var TodoListPage = function () {
  this.newTodo = element(by.css('.new-todo input'));
  this.todoList = element(by.css('.todo-list'));
  this.todos = element.all(by.css('.todo-list .todo'));

  this.Todo = function (el) {
    this.content = el.element(by.css('input'));
    this.deleteIcon = el.element(by.css('.delete-icon'));
    this.checkbox = el.element(by.css('[type="checkbox"]'));
  }
}

module.exports.TodoListPage = TodoListPage;
