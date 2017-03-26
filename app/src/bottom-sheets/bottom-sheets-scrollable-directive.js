function BottomSheetScrollableDirective($timeout, $window) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            scope.addScrollableContentFix = () => {
                // Need to take into account 88px padding-bottom of md-bottom-sheet element
                let h = element[0].offsetHeight - 88,
                    h1 = scope.bottomSheetContent[0].offsetHeight;
                // md-content height is bigger than md-bottom-sheet heith, we have reached height limit, content max height can now be limited to thax px amount
                if (h1 > h)
                    scope.bottomSheetContent.css({ maxHeight: `${h}px` });
            };

            scope.bottomSheetContent = element.find('md-content');

            // stop closing bottom sheet while scrolling content (mostly iOs problem)
            element.on('touchmove', (evt) => {
                evt.stopPropagation();
            });

            // Scroll fix is applied when height of the md-content element changes. 
            // Also neccessary to watch for changes. If elements are dynamically added to the bottom sheet and md-content might grow larger than md-bottom-sheet later on.
            scope.$watch(
                () => scope.bottomSheetContent[0].offsetHeight,
                (newValue, oldValue) => {
                    if (newValue != oldValue)
                        scope.addScrollableContentFix();
                }
            );

            // Taking care of fixed max-height for md-content and relative max-height for md-bottom-sheet, when window size changes
            let onWindowResize = () => {
                // This will allow container and content to fully stretch, and then apply 
                scope.bottomSheetContent.css({ maxHeight: '' });
                $timeout(scope.addScrollableContentFix, 300);
            };
            scope.$on('$destroy', function () {
                angular.element($window).off('resize', onWindowResize);
            });
            angular.element($window).on('resize', onWindowResize);
        },
        scope: {}
    };
}
export default ['$timeout', '$window', BottomSheetScrollableDirective];