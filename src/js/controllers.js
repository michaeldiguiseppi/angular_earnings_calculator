app.controller('detailsCtrl', ['$scope', 'mealDataService', function($scope, mealDataService) {
  $scope.basePrice = parseFloat(0).toFixed(2);
  $scope.taxRate = parseFloat(0).toFixed(2);
  $scope.tipPercent = parseFloat(0).toFixed(2);
  $scope.meal = {};
  $scope.mealCounter = mealDataService.getMeals().length +1;
  $scope.formSubmit = function() {
    mealDataService.addMeal($scope.meal);
    $scope.mealCounter = mealDataService.getMeals().length +1;
    $scope.meal = {};
  };
}]);

app.controller('chargesCtrl', ['$scope', 'mealDataService', function($scope, mealDataService) {
  var currentMeal = 0;
  var meals = mealDataService.getMeals();
  var mealCounter = meals.length;
  $scope.currentMeal = currentMeal+1;
  $scope.previous = function() {
    meals = mealDataService.getMeals();
    mealCounter = meals.length;
    if (currentMeal > 0) {
      currentMeal --;
    } else {
      currentMeal = mealCounter - 1;
    }
    $scope.currentMeal = currentMeal+1;
    getTotals(meals[currentMeal]);
  };
  $scope.next = function() {
    meals = mealDataService.getMeals();
    mealCounter = meals.length;
    if (currentMeal < (mealCounter - 1)) {
      currentMeal ++;
    } else {
      currentMeal = 0;
    }
    $scope.currentMeal = currentMeal+1;
    getTotals(meals[currentMeal]);
  };
  function getTotals (meal) {
    $scope.subtotal = parseFloat(meal.basePrice) * (1+(parseFloat(meal.taxRate)/100));
    $scope.tip = $scope.subtotal * (parseFloat(meal.tipPercent)/100);
    $scope.total = $scope.subtotal + $scope.tip;
  }
  getTotals(meals[currentMeal]);
}]);

app.controller('earningsCtrl', ['$scope', 'mealDataService', function($scope, mealDataService) {
  $scope.totals = mealDataService.getCumulativeTotals();
}]);

app.controller('resetCtrl', ['$scope', 'mealDataService', function($scope, mealDataService) {
  $scope.reset = mealDataService.resetAll();
}]);
