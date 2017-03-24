// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name: 'bottomSheetsDemo',
  config: {
    bindings: {},
    templateUrl: 'src/bottom-sheets-demo/bottom-sheets-demo.html',
    controller: function ($scope, $mdBottomSheet) {
      $scope.showListBottomSheet = () => {
        console.log('showListBottomSheet');
        $mdBottomSheet.show({
          templateUrl: 'src/bottom-sheets-demo/bottom-sheet-list-template.html',
          controller: function ($scope, $mdBottomSheet) {
            $scope.items = [
              { name: 'Share', icon: 'share-arrow' },
              { name: 'Upload', icon: 'upload' },
              { name: 'Copy', icon: 'copy' },
              { name: 'Print this page', icon: 'print' },
              { name: 'Upload', icon: 'upload' },
              { name: 'Copy', icon: 'copy' },
              { name: 'Print this page', icon: 'print' },
              { name: 'Upload', icon: 'upload' },
              { name: 'Copy', icon: 'copy' },
              { name: 'Print this page', icon: 'print' },
              { name: 'Upload', icon: 'upload' },
              { name: 'Copy', icon: 'copy' },
              { name: 'Print this page', icon: 'print' },
              { name: 'Upload', icon: 'upload' },
              { name: 'Copy', icon: 'copy' },
              { name: 'Print this page', icon: 'print' },
              { name: 'Upload', icon: 'upload' },
              { name: 'Copy', icon: 'copy' },
              { name: 'Last item', icon: 'print' }
            ];
          }
        }).then(function (clickedItem) {
          console.log(clickedItem);
        });
      }
    }
  }
};
