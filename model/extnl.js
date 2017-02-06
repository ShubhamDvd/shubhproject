var myapp = angular.module("app1", []);

myapp.controller('cntrl', function ($scope)

  {
    // $scope.message = "MY BIKE STATUS";
    // $scope.products = ["Milk", "Bread", "Cheese","Roti"];

    $scope.bikes = [];
    $scope.deletedItem = [];

    $scope.addItem = function ()

    {
      $scope.errortext = "";
      if (!$scope.addMe) {
        return;
      }

      if ($scope.bikes.indexOf($scope.addMe) == -1)

      {

        $scope.bikes.push($scope.addMe);
      } else

      {

        console.log('working');
        $scope.errortext = "Bike is already exist";
      }

      $scope.firstform.addMe.$setPristine();
      $scope.firstform.addMe.$setPristine(true);
      $scope.addMe='';


    }

    $scope.removeItem = function (index)

    {
      // $scope.bikes.push($scope.addMe);
      $scope.deletedItem.push($scope.bikes[index]);
      $scope.bikes.splice(index, 1);


    }


  });

