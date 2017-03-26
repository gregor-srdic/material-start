// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name: 'bottomSheetsDemo',
  config: {
    bindings: {},
    templateUrl: 'src/bottom-sheets-demo/bottom-sheets-demo.html',
    controller: function ($scope, $mdBottomSheet) {
      $scope.showListBottomSheet = () => {
        $mdBottomSheet.show({
          templateUrl: 'src/bottom-sheets-demo/bottom-sheet-list-template.html',
          controller: function ($rootScope, $scope, $mdBottomSheet) {
            if (!$rootScope.bottomSheetItems) {
              $rootScope.bottomSheetItems = [];
              for (let i = 0; i < 10; i++)
                $rootScope.bottomSheetItems.push({ name: `Item ${i}`, icon: 'arrow_down' });
            }
            $scope.addOrRemoveItem = function (i) {
              if (i > 0)
                $rootScope.bottomSheetItems.push({ name: `Item ${$rootScope.bottomSheetItems.length}`, icon: 'arrow_down' });
              else if ($rootScope.bottomSheetItems.length > 0)
                $rootScope.bottomSheetItems.splice($rootScope.bottomSheetItems.length-1, 1);
            }
            this.$onInit = function () {
              console.log('$onInit ');
            };
          }
        }).then(function (clickedItem) {
          console.log(clickedItem);
        });
      }
    }
  }
};
