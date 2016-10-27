(function() {

    angular
        .module('todoList')
        .service('todoListService', todoListService);

    function todoListService() {
        const LS_LIST_KEY = "todoList:list";

        var _list = angular.fromJson(localStorage.getItem(LS_LIST_KEY) || "[]");

        return {
            get list() { return list(); },
            set list(list) {
                _list = list;
                saveState();
            },
            add: addTodo,
            remove: removeTodo,
            save: saveState
        };

        ////////////

        function list() {
            return _list;
        }

        function addTodo(content) {
            if (!_(_list).find(function (obj) { return obj.content === content; })) {
              _list.unshift({
                  content: content,
                  checked: false
              });
              saveState();
            }
        }

        function removeTodo(content) {
            _.remove(_list, function (todo) { return todo.content === content; });
            saveState();
        }

        // PRIVATE(s)

        function saveState() {
            localStorage.setItem(LS_LIST_KEY, angular.toJson(_list));
        }
    }

})();
