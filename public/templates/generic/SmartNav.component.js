/**
 * Created by mlingolu on 7/18/16.
 */

angular.module('smart-app')
    .component('smartNav',{
        bindings:{},
        templateUrl:'./templates/generic/smartNav.component.html',
        controller:'NavCtrl',
        controllerAs:'NavCtrl'
    });

angular.module('smart-app').controller('NavCtrl',['$http','$scope',NavCtrl]);


function NavCtrl($http,$scope) {
    var ctrl =this;
    ctrl.home='Smart-App';
};