function DetailController ($scope, $http, SERVER, $stateParams) {

  $scope.imageDetail = {};

  init();

  function init () {
    $http.get(SERVER.URL + $stateParams.id).then( (res) => {
      $scope.imageDetail = res.data
      console.log(res.data)    
    })

    $scope.likeMe = function (image) {
      image.likes = image.likes + 1;
      $http.put(SERVER.URL + image._id, image).then((res) => {

      })
    }
  }

}

DetailController.$inject = ['$scope', '$http', 'SERVER', '$stateParams'];
export { DetailController };