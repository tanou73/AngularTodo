(()=> {

    angular
        .module('todoList')
        .directive('todo', todo);

    function todo() {
        return {
            restrict: 'E',
            scope: {
                todo: '=ngModel',
                deleteCallback: '&onDelete'
            },
            templateUrl: 'todoList/todo/todo.html',
            controller: TodoController,
            controllerAs: 'todoCtrl',
            bindToController: true
        };

        function TodoController() {
            var todoCtrl = this;

            todoCtrl.onDeleteIconClick = onDeleteIconClick;

            //////////////

            function onDeleteIconClick() {
                todoCtrl.deleteCallback({
                    id: todoCtrl.todo.content
                });
            }
        }
    }

})();
