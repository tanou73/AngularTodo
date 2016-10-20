(function () {

  angular
    .module('todoList')
    .controller('TodoListController', TodoListController);

    function TodoListController (todoListService) {
        var todoListCtrl = this;

        todoListCtrl.deleteTodo = deleteTodo;
        todoListCtrl.onKeypress = onKeypress;

        //////////////

        function deleteTodo(content) {
            todoListService.remove(content);
        }

        // HANDLER(s)

        function onKeypress(evt) {
            // On enter
            if (evt.keyCode === 13) {
                todoListService.add(todoListCtrl.newTodo);
                todoListCtrl.newTodo = "";
            }
        }

        function activate() {
            todoListCtrl.todos = todoListService.list;
        }

        activate();
    }

})();
