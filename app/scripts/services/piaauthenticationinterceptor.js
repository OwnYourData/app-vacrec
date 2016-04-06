'use strict';

/**
 * @ngdoc service
 * @name vaccRecApp.piaAuthenticationInterceptor
 * @description
 * # piaAuthenticationInterceptor
 * Factory in the vaccRecApp.
 */
angular.module('vaccRecApp')
  .factory('piaAuthenticationInterceptor', function ($q) {
    return {
      request: function (config) {
        if (config.url.startsWith('$pia')) {

          var deferred = $q.defer();

          $.get("token", function (data) {
            var token = data.access_token;

            config.url = config.url.replace('$pia','http://localhost:8080');
            config.headers['Authorization'] = 'Bearer '+token;


            deferred.resolve(config);
          });

          return deferred.promise;

        } else {
          return config;
        }
      }
    };
  });
