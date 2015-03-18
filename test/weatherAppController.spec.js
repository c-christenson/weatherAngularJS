describe('weatherAppController', function() {
  beforeEach(module('weatherApp'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {

    scope = $rootScope.$new();
    ctrl = $controller('weatherAppController', {
      $scope: scope
    });
  }));
});