'use strict';

angular.module('fitrecordMeanApp')
  .controller('LiftCtrl', function ($scope) {
    $scope.lifts = [
      {'name': 'Back Squat'},
      {'name': 'Front Squat'},
      {'name': 'Clean'},
      {'name': 'Clean & Jerk'},
      {'name': 'Deadlift'},
      {'name': 'Snatch'}
    ];
  });
