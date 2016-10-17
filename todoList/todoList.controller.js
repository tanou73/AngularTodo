(function () {

  angular
    .module('todoList')
    .controller('TodoListController', TodoListController);

    function TodoListController () {
        var todoListCtrl = this;

        todoListCtrl.deleteTodo = deleteTodo;
        todoListCtrl.onKeypress = onKeypress;

        //////////////

        function deleteTodo(content) {
            _.remove(todoListCtrl.todos, todo => todo.content === content);
        }

        function onKeypress(evt) {
            // On enter
            if (evt.keyCode === 13) {
                todoListCtrl.todos.unshift({
                    content: todoListCtrl.newTodo,
                    checked: false
                });
                todoListCtrl.newTodo = "";
            }
        }

        function activate() {
            todoListCtrl.todos = [{
                content: 'test1',
                checked: false
            },{
                content: 'test2',
                checked: false
            },{
                content: 'test3',
                checked: false
            }];
        }

        activate();
    }

})();
