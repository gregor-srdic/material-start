import { createGuid, animateAccordionToggle } from 'src/utils.js';

export default {
  name: 'mdAccordion',
  config: {
    transclude: true,
    bindings: { header: '@', isOpen: '<' },
    controller: function ($scope, $element, $animateCss) {
      this.componentId = createGuid();
      $scope.animationDuration = 0.3;
      $scope.open = this.isOpen !== true;
      this.$onInit = () => {
        $scope.$on('CLOSE_ACCORDION', (event, title, description) => {
          if($scope.open && title != this.componentId)
            $scope.toggleOpen();
        });
        $scope.accordionContent = $element.find('md-card-content');
        $scope.expandIcon = $element.find('md-card-header').find('md-icon');
        $scope.toggleOpen = () => {
          $scope.open = !$scope.open;
          animateAccordionToggle($animateCss, $scope.open, $scope.accordionContent, $scope.expandIcon, $scope.animationDuration);
        };
        $element.find('md-card-header').on('mousedown', ()=>{          
          if (!$scope.open)
            $scope.$emit('ACCORDION_OPENED', this.componentId, '');
          $scope.toggleOpen();
        });
        $scope.toggleOpen();
      }
    },
    templateUrl: 'src/accordion/accordion-component.html'
  }
};
