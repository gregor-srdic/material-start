import { createGuid, animateAccordionToggle, getResolvedPromise } from 'src/utils.js';

export default {
  name: 'mdAccordion',
  config: {
    transclude: true,
    bindings: { header: '@', isOpen: '<' },
    controller: function ($scope, $element, $animateCss, $q) {
      this.componentId = createGuid();
      $scope.animationDuration = 0.3;
      $scope.lastAnimationPromise = getResolvedPromise($q);
      $scope.accordionCard = $element.find('md-card');
      $scope.accordionCardContent = $scope.accordionCard.find('md-card-content');
      $scope.expandIcon = $element.find('md-card-header').find('md-icon');
      $scope.open = this.isOpen !== true;
      this.$onInit = () => {
        $scope.$on('CLOSE_ACCORDION', (event, title, description) => {
          if ($scope.open && title != this.componentId)
            $scope.toggleOpen(false);
        });
        $scope.toggleOpen = (skipAnimation) => {
          $scope.lastAnimationPromise.then(
            r => {
              $scope.open = !$scope.open;
              $scope.lastAnimationPromise = animateAccordionToggle($animateCss, $q, $scope.open, $scope.accordionCardContent, $scope.expandIcon, skipAnimation ? 0 : $scope.animationDuration);
            }
          )
        };
        $element.find('md-card-header').on('click', () => {
          if (!$scope.open)
            $scope.$emit('ACCORDION_OPENED', this.componentId, '');
          $scope.toggleOpen(false);
        });
        $scope.toggleOpen(true);
      }
    },
    templateUrl: 'src/accordion/accordion-component.html'
  }
};
