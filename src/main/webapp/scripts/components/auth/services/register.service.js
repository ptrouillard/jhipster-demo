'use strict';

angular.module('jHipsterDemoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


