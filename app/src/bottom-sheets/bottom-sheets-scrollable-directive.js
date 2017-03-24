function BottomSheetScrollableDirective($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('touchmove', function (evt) {
                evt.stopPropagation();
            });
            $timeout(() => {
                scope.bottomSheetContent = element.find('md-content');
                let h = element[0].offsetHeight - 88,
                    h1 = scope.bottomSheetContent[0].offsetHeight;
                if (h1 > h) {
                    scope.bottomSheetContent.css({ maxHeight: `${h}px`, overflowY: 'scroll' });
                }
            }, 300)
        },
        scope: {
        }
    };
}
export default ['$timeout', BottomSheetScrollableDirective];