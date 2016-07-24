function EditController($scope, $http, SERVER, $state, $stateParams) {

  $scope.imageEdit = {};

  init();

  function init() {
    $http.get(SERVER.URL + $stateParams.id).then((res) => {
      $scope.imageEdit = res.data
      console.log(res.data)
    })
  }

  $scope.editImage = (image) => {
    image.updatedAt = Date.now();
    $http.put(SERVER.URL + image._id, image).then((res) => {
      $state.go('root.home')
    });
  }

}

EditController.$inject = ['$scope', '$http', 'SERVER', '$state', '$stateParams'];
export { EditController };