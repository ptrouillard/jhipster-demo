'use strict';

angular.module('jHipsterDemoApp')
    .controller('AuthorDetailController', function ($scope, $rootScope, $stateParams, entity, Author) {
        $scope.author = entity;
        $scope.load = function (id) {
            Author.get({id: id}, function(result) {
                $scope.author = result;
            });
        };
        $rootScope.$on('jHipsterDemoApp:authorUpdate', function(event, result) {
            $scope.author = result;
        });
    });
