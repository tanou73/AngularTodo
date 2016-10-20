(() => {

    angular
        .module('todoList')
        .service('todoListService', todoListService);

    function todoListService() {
        const LS_LIST_KEY = "todoList:list";

        let _list = angular.fromJson(localStorage.getItem(LS_LIST_KEY) || "[]");

        return {
            get list() { return list(); },
            set list(list) {
                _list = list;
                _saveState();
            },
            add: addTodo,
            remove: removeTodo
        };

        ////////////

        function list() {
            return _list;
        }

        function addTodo(content) {
            _list.unshift({
                content: content,
                checked: false
            });
            _saveState();
        }

        function removeTodo(content) {
            _.remove(_list, todo => todo.content === content);
            _saveState();
        }

        // PRIVATE(s)

        function _saveState() {
            localStorage.setItem(LS_LIST_KEY, angular.toJson(_list));
        }
    }

})();
