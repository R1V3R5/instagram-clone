function DetailController($scope, $http, SERVER, $stateParams, $state) {

  $scope.imageDetail = {};
  $scope.comments = [];

  init();

  function init() {
    $http.get(SERVER.URL + $stateParams.id).then((res) => {
      $scope.imageDetail = res.data
      $scope.comments = res.data.comments
      console.log(res.data.comments)
    })
  }

  $scope.likeMe = function (image) {
    image.likes = image.likes + 1;
    $http.put(SERVER.URL + image._id, image).then((res) => {

    })
  }

  $scope.deleteMe = (id) => {
    $http.delete(SERVER.URL + id._id).then((res) => {
      $state.go('root.home')
    });
  };

  $scope.addComment = (image) => {
    console.log(image)
    $scope.comments.push(image.comments)
    $http.put(SERVER.URL + image._id, image).then((res) => {

    })
  }


}

DetailController.$inject = ['$scope', '$http', 'SERVER', '$stateParams', '$state'];
export { DetailController };