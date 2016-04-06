'use strict';

/**
 * @ngdoc service
 * @name vaccRecApp.Vaccination
 * @description
 * # Vaccination
 * Factory in the vaccRecApp.
 */
angular.module('vaccRecApp')
  .factory('Record', function ($resource) {
    return $resource('$pia/api/repos/eu.ownyourdata.vaccrec/items/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': {
        method: 'GET',
        transformResponse: function (data) {
          data = angular.fromJson(data);
          return data;
        }
      },
      'update': { method:'PUT' }
    });
  });
