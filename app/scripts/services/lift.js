'use strict';

angular.module('fitrecordMeanApp')
  .factory('Lift', function ($resource) {
    return $resource('/api/lifts/:liftId', {
      liftId: '@id'
    }, {
      update: {
        method: 'PUT',
        params: {}
      },
	  });
  });
