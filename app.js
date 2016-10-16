(() => {
  angular.module('app-dependencies', [
      'ui.router',
      'ngAnimate'
  ]);

  angular.module('todoApp', [
    'app-dependencies',
    'todoList'
  ]);

  angular.module('todoApp').config(function($stateProvider, $urlRouterProvider) {

      /* Add New States Above */
      $urlRouterProvider.otherwise('/todos');

  });
})();
