function AddController($scope, $http, SERVER, $state) {

  $scope.addImage = (image) => {
    image.createdAt = Date.now();
    image.updatedAt = Date.now();
    image.comments = [];
    image.likes = 0;
    $http.post(SERVER.URL, image).then((res) => {
      $state.go('root.home');
    });
  };

}

AddController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { AddController }; 