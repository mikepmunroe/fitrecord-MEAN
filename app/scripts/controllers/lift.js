'use strict';

angular.module('fitrecordMeanApp')
  .controller('LiftCtrl', function ($scope, $http) {
      $http.get('lifts/lifts.json').success(function(data) {
        $scope.lifts = data;
    });

    $scope.orderProp = 'load';
});