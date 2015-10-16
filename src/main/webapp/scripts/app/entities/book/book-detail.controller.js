'use strict';

angular.module('jHipsterDemoApp')
    .controller('BookDetailController', function ($scope, $rootScope, $stateParams, entity, Book) {
        $scope.book = entity;
        $scope.load = function (id) {
            Book.get({id: id}, function(result) {
                $scope.book = result;
            });
        };
        $rootScope.$on('jHipsterDemoApp:bookUpdate', function(event, result) {
            $scope.book = result;
        });
    });
