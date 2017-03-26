export default {
  name: 'accordionDemo',
  config: {
    bindings: {},
    templateUrl: 'src/accordion-demo/accordion-demo.html',
    controller: function ($scope) {
      $scope.accordionItems = [];
      for (let i = 0; i < 5; i++)
        $scope.accordionItems.push({ name: `Item ${i}`, icon: 'arrow_down' });
      $scope.addOrRemoveItem = function (i) {
        if (i > 0)
          $scope.accordionItems.push({ name: `Item ${$scope.accordionItems.length}`, icon: 'arrow_down' });
        else if ($scope.accordionItems.length > 0)
          $scope.accordionItems.splice($scope.accordionItems.length-1, 1);
      }
    }
  }
};
