(function() {

  angular.module('todoList', ['app-dependencies']);

  angular.module('todoList').config(function($stateProvider) {

      $stateProvider
        .state('todoList', {
            url: '/todos',
            controller: 'TodoListController',
            controllerAs: 'todoListCtrl',
            templateUrl: 'todoList/todoList.html'
        });

  });

})();
