/**
 * Created by mlingolu on 7/11/16.
 */

angular.module('smart-app',['ui.router']);

angular.module('smart-app').config(config);


function config($stateProvider,$urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise('/');


    $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'templates/home/index.html'
        })
        .state('travel',{
            url:'/travel',
            templateUrl:'templates/travel/index.html'
        })
        .state('restaurants',{
            url:'/restaurants',
            templateUrl:'templates/restaurants/index.html'
        })
        .state('movies',{
            url:'/movies',
            templateUrl:'templates/movies/index.html'
        })
        .state('cars',{
            url:'/cars',
            templateUrl:'templates/cars/index.html'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}


/**
 * Created by mlingolu on 7/18/16.
 */

angular.module('smart-app').controller('BodyCtrl',['$scope',BodyCtrl]);

function BodyCtrl($scope) {
    var ctrl=this;
    ctrl.chatBoxOpend=false;

    ctrl.openChatBox=function () {
        ctrl.chatBoxOpend=!ctrl.chatBoxOpend;
    }
}
/**
 * Created by mlingolu on 7/18/16.
 */

angular.module('smart-app')
    .component('smartChat',{
        bindings:{},
        templateUrl:'./templates/chats/chat.component.html',
        controller:'SmartChat',
        controllerAs:'SmartChat'
    });

angular.module('smart-app').controller('SmartChat',['$http','$scope',SmartChat]);


function SmartChat($http,$scope) {
    var ctrl =this;
    ctrl.home='Smart-App';

    $('.chat[data-chat=person2]').addClass('active-chat');
    $('.person[data-chat=person2]').addClass('active');

    $('.left .person').mousedown(function(){
        if ($(this).hasClass('.active')) {
            return false;
        } else {
            var findChat = $(this).attr('data-chat');
            var personName = $(this).find('.name').text();
            $('.right .top .name').html(personName);
            $('.chat').removeClass('active-chat');
            $('.left .person').removeClass('active');
            $(this).addClass('active');
            $('.chat[data-chat = '+findChat+']').addClass('active-chat');
        }
    });
};
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