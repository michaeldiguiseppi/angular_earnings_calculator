app.service('mealDataService', function() {
  var meals = [];
  var totals = {};
  return {
    getMeals: function() {
      return meals;
    },
    getCumulativeTotals: function() {
      totals = meals.reduce(function(prev, meal){
      prev.subtotal += +meal.basePrice;
      prev.tax += +meal.basePrice * +meal.taxRate / 100;
      prev.tips += +meal.basePrice * +meal.tipPercent / 100;
      prev.count++;
      return prev;
    }, { subtotal: 0, tax: 0, tips: 0, count: 0 });
    return totals;
    },
    addMeal: function(obj) {
      return meals.push(obj);
    },
    resetAll: function() {
      meals = [];
      totals = {};
    }
  };
});
