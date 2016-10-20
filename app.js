(function () {

  angular.module('app-dependencies', [
      'ui.router',
      'ngAnimate',
      'ngMaterial'
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
