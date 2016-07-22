function DetailController($scope, $http, SERVER, $stateParams, $state) {

  $scope.imageDetail = {};

  init();

  function init() {
    $http.get(SERVER.URL + $stateParams.id).then((res) => {
      $scope.imageDetail = res.data
      console.log(res.data)
    })
  }

  $scope.likeMe = function (image) {
    image.likes = image.likes + 1;
    $http.put(SERVER.URL + image._id, image).then((res) => {

    })
  }

  $scope.deleteMe = (id) => {
    $http.delete(SERVER.URL + id._id).then( (res) => {
      $state.go('root.home')
      });
  };


}

DetailController.$inject = ['$scope', '$http', 'SERVER', '$stateParams', '$state'];
export { DetailController };