function AccordionDirective($animateCss, $timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            let animationDuration = 0.3;
            element.addClass('md-accordion');
            scope.e = element.find('md-card-content');
            scope.toggleOpen = () => {
                scope.open = !scope.open;
                let h = scope.e[0].offsetHeight;
                if (scope.open) {
                    $animateCss(scope.e, {
                        from: { maxHeight: '0px', position: 'relative' },
                        to: { maxHeight: `${h}px`},
                        duration: animationDuration
                    })
                        .start()
                        .then(() => scope.e.css({ maxHeight: '' }));
                }
                else {
                    $animateCss(scope.e, {
                        from: { maxHeight: `${h}px` },
                        to: { maxHeight: '0px'},
                        duration: animationDuration
                    })
                        .start()
                        .then(() => scope.e.css({ position: 'absolute', maxHeight: ''}));
                }

            }
            scope.toggleOpen();
            element.on('mousedown', scope.toggleOpen);
        },
        scope: {}
    };
}
export default ['$animateCss', '$timeout', AccordionDirective];