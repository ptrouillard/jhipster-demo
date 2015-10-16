 'use strict';

angular.module('jHipsterDemoApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jHipsterDemoApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jHipsterDemoApp-params')});
                }
                return response;
            }
        };
    });
