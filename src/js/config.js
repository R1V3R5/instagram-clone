function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/root.tmpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tmpl.html',
      controller: 'HomeController'
    })
    .state('root.add', {
      url: '/add',
      templateUrl: 'templates/add.tmpl.html',
      controller: 'AddController'
    })
    ;


    $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider']
export { config };