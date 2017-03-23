function AccordionDirective($animateCss, $timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            let animationDuration = 0.3;
            element.addClass('md-accordion');
            scope.toggleOpen = () => {
                scope.open = !scope.open;
                let e = element.find('md-card-content');
                let h = e[0].offsetHeight;
                if (scope.open) {
                    $animateCss(e, {
                        from: { maxHeight: '0px', paddingBottom: 0, paddingTop: 0, position: 'relative' },
                        to: { maxHeight: `${h}px`, paddingBottom: '', paddingTop: '' },
                        duration: animationDuration
                    })
                        .start()
                        .then(() => e.css({ maxHeight: '', paddingBottom: '', paddingTop: '' }));
                }
                else {
                    $animateCss(e, {
                        from: { maxHeight: `${h}px` },
                        to: { maxHeight: '0px', paddingBottom: 0, paddingTop: 0 },
                        duration: animationDuration
                    })
                        .start()
                        .then(() => e.css({ position: 'absolute', maxHeight: '', paddingBottom: '', paddingTop: '' }));
                }

            }
            scope.toggleOpen();
            element.on('mousedown', scope.toggleOpen);
        },
        scope: {}
    };
}
export default ['$animateCss', '$timeout', AccordionDirective];