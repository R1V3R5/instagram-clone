function AddController ($scope, $http, SERVER, $state) {

  $scope.addImage = (image) => {
    $http.post(SERVER.URL, image).then( (res) => {
      $state.go('root.home');
    });
  };

}

AddController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { AddController }; 