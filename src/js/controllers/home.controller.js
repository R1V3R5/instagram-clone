function HomeController ($scope, $http, SERVER) {

  $scope.images = [];

  init();

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.images = res.data;
    });
  }

  $scope.deleteMe = (id) => {
    console.log('Here')
    $http.delete(SERVER.URL + id).then( (res) => {
      $scope.images = $scope.images.filter( (image) => {
        return image._id !== id;
      });
    });
  };

  $scope.viewImage = (id) => {
    console.log(id)
  }
  

}

HomeController.$inject = ['$scope', '$http', 'SERVER'];
export { HomeController };