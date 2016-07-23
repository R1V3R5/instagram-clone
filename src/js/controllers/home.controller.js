function HomeController ($scope, $http, SERVER, $state) {

  $scope.images = [];

  init();

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.images = res.data;
    });
  }

  $scope.deleteMe = (id) => {
    $http.delete(SERVER.URL + id).then( (res) => {
      $scope.images = $scope.images.filter( (image) => {
        return image._id !== id;
      });
    });
  };

  $scope.viewImage = (id) => {
    $state.go('root.detail')
  }


  $scope.likeMe = (image) => {
    image.likes = image.likes + 1;
    $http.put(SERVER.URL + image._id, image).then((res) => {
      console.log(res)
    })
  }
  

}

HomeController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { HomeController };