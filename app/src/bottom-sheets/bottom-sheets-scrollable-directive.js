function BottomSheetScrollableDirective($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            scope.addScrollableContentFix = () => {
                // 88px is padding for md-bottom-sheet
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

            // apply scrollable content fix with slight delay to ensure measured element heights are correct
            //$timeout(scope.addScrollableContentFix, 300);

            // Watch md-content-height for changes. 
            // Neccessary if elements are dynamically added to the bottom sheet and md-content might grow larger than md-bottom-sheet later on
            scope.$watch(
                () => scope.bottomSheetContent[0].offsetHeight,
                (newValue, oldValue) => {
                    //console.log(scope.bottomSheetContent[0].scrollHeight);
                    if (newValue != oldValue)
                        scope.addScrollableContentFix();
                }
            );
            /*
            scope.$watch(
                () => element[0].offsetHeight,
                (newValue, oldValue) => {
                    console.log(2);
                    if (newValue != oldValue)
                        scope.addScrollableContentFix();
                }
            );
            */
        },
        scope: {}
    };
}
export default ['$timeout', BottomSheetScrollableDirective];