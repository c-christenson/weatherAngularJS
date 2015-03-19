weatherApp.controller('weatherAppController', function($scope, $resource) {

  var searchResource = $resource('http://api.openweathermap.org/data/2.5/weather?q=');

  $scope.doSearch = function() {

    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm
    });

    $scope.iconUrl = "http://openweathermap.org/img/w/"

  };
});