/**
 * Created by Priyankrege on 10/12/2017.
 */
var app = angular.module('app', []);

app.controller('angularController',['$scope','$http',function ($scope,$http) {

    $scope.loadSlangs = function () {
        $http.get('../../app/dictionary-api')
            .then(function (response) {
                $scope.slangList =  response.data;
            },function (error) {
                console.log(error);
            });
    }

    $scope.addTerm = function () {
        var data = {
            term : $scope.data.term,
            defined : $scope.data.definition
        }
        $scope.slangList.push(data);
        $scope.data={};

    }

    $scope.removeWord = function (index) {
        $scope.slangList.splice(index,1);
    }


}]);