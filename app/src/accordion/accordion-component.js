import { createGuid } from 'src/utils.js';

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
          let h = $scope.accordionContent[0].offsetHeight;
          if ($scope.open) {
            $animateCss($scope.accordionContent, {
              from: { maxHeight: '0px', position: 'relative' },
              to: { maxHeight: `${h}px` },
              duration: $scope.animationDuration
            })
              .start()
              .then(() => $scope.accordionContent.css({ maxHeight: '' }));
            if ($scope.expandIcon && $scope.expandIcon.length > 0) {
              $animateCss($scope.expandIcon, {
                from: { '-webkit-transform': 'scaleY(1)', transform: 'scaleY(1)' },
                to: { '-webkit-transform': 'scaleY(-1)', transform: 'scaleY(-1)' },
                duration: $scope.animationDuration
              })
                .start()
            }
          }
          else {
            $animateCss($scope.accordionContent, {
              from: { maxHeight: `${h}px` },
              to: { maxHeight: '0px' },
              duration: $scope.animationDuration
            })
              .start()
              .then(() => $scope.accordionContent.css({ position: 'absolute', maxHeight: '' }));
            if ($scope.expandIcon && $scope.expandIcon.length > 0) {
              $animateCss($scope.expandIcon, {
                from: { '-webkit-transform': 'scaleY(-1)', transform: 'scaleY(-1)' },
                to: { '-webkit-transform': 'scaleY(1)', transform: 'scaleY(1)' },
                duration: $scope.animationDuration
              })
                .start()
            }
          }
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
