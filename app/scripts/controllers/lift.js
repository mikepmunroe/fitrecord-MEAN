'use strict';

angular.module('fitrecordMeanApp')
  .controller('LiftCtrl', function ($scope, $http, Lift) {
      $http.get('lifts/lifts.json').success(function(data) {
        $scope.lifts = data;
      });

      $scope.orderProp = 'load';

      $scope.addLift = function () {

        var newLift = new Lift({
          date: $scope.date,
          type: $scope.type,
          repScheme: $scope.repScheme,
          load: $scope.load,
          notes: $scope.notes
        });
        newLift.$save();
      };

    });