'use strict';

angular.module('fitrecordMeanApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
