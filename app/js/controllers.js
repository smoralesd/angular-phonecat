'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {

    $scope.name = "World";

    $scope.phones = [{
        'name': 'Nexus S',
        'snippet': 'Fast just got gaster with Nexus S'
    }, {
        'name': 'Motorola XOOM™ with Wi-Fi',
        'snippet': 'The Next, Next Generation tablet.'
    }, {
        'name': 'MOTOROLA XOOM™',
        'snippet': 'The Next, Next Generation tablet.'
    }];
});
