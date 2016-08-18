/**
 * Created by mlingolu on 7/18/16.
 */

angular.module('smart-app').controller('BodyCtrl',['$scope',BodyCtrl]);

function BodyCtrl($scope) {
    var ctrl=this;
    ctrl.url="/Technology.png";
    ctrl.chatBoxOpend=false;

    ctrl.openChatBox=function () {
        ctrl.chatBoxOpend=!ctrl.chatBoxOpend;
    }
}
var app= angular.module('smart-app');
app.controller('AppCtrl', function($scope, authentication) {
  $scope.templates =
  [
    { url: 'templates/home/login.html' },
    { url: 'templates/home/home.html' }
  ];
    $scope.template = $scope.templates[0];
  $scope.login = function (username, password) {
    if ( username === 'admin' && password === '1234') {
        authentication.isAuthenticated = true;
        $scope.template = $scope.templates[1];
        $scope.user = username;
    } else {
        $scope.loginError = "Invalid username/password combination";
    };
  };

});