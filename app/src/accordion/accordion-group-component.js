export default {
  name : 'mdAccordionGroup',
  config : {
    transclude: true,
    bindings: { },
    controller: function ($scope, $element) {
      this.$onInit = () => {
        $scope.$on('ACCORDION_OPENED', (event, title, description) => {
          event.stopPropagation();
          $scope.$broadcast('CLOSE_ACCORDION', title, description);
        });
      };
    },
    template: '<div ng-transclude></div>'
  }
};
