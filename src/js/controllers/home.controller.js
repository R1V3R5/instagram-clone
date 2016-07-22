function HomeController ($scope, $http, SERVER, $state) {

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
    $state.go('root.detail')
  }


  $scope.likeMe = (image) => {
    // console.log(image.likes)
    image.likes = image.likes + 1;
    console.log(image.likes)
    $http.put(SERVER.URL + image._id, image).then((res) => {
      console.log(res)
      // res.data.likes = image.likes + 1;
    })
    // $http.get(SERVER.URL + id).then(res) => {
    //   console.log(res)
    // }
  }
  

}

HomeController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { HomeController };