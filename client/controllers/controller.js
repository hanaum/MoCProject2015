ourApp.controller('usersController', function($scope, $routeParams, mainFactory) {
    var userdata = {};
    mainFactory.getUserInfo(function(data) {
        $scope.userdata = data;
        console.log($scope.userdata);
    })

    $scope.addUser = function() {
        console.log($scope.newUser);
        mainFactory.addUser($scope.newUser, function(data) {
        });
        $scope.newUser = {};
    }

})
ourApp.controller('charityController', function($scope, mainFactory) {
    var charities = [];
    mainFactory.getCharities(function(data) {
        $scope.charities = data;
    })


})
