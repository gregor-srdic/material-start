function AccordionDirective($animateCss, $timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            let animationDuration = 0.3;
            element.addClass('md-accordion');
            scope.accordionContent = element.find('md-card-content');
            scope.expandIcon = element.find('md-card-header').find('md-icon');
            scope.toggleOpen = () => {
                scope.open = !scope.open;
                let h = scope.accordionContent[0].offsetHeight;
                if (scope.open) {
                    $animateCss(scope.accordionContent, {
                        from: { maxHeight: '0px', position: 'relative' },
                        to: { maxHeight: `${h}px` },
                        duration: animationDuration
                    })
                        .start()
                        .then(() => scope.accordionContent.css({ maxHeight: '' }));
                    $animateCss(scope.expandIcon, {
                        from: { '-webkit-transform': 'scaleY(1)', transform: 'scaleY(1)' },
                        to: { '-webkit-transform': 'scaleY(-1)', transform: 'scaleY(-1)' },
                        duration: animationDuration
                    })
                        .start()
                }
                else {
                    $animateCss(scope.accordionContent, {
                        from: { maxHeight: `${h}px` },
                        to: { maxHeight: '0px' },
                        duration: animationDuration
                    })
                        .start()
                        .then(() => scope.accordionContent.css({ position: 'absolute', maxHeight: '' }));
                    $animateCss(scope.expandIcon, {
                        from: { '-webkit-transform': 'scaleY(-1)', transform: 'scaleY(-1)' },
                        to: { '-webkit-transform': 'scaleY(1)', transform: 'scaleY(1)' },
                        duration: animationDuration
                    })
                        .start()
                }

            }
            scope.toggleOpen();
            element.on('mousedown', scope.toggleOpen);
        },
        scope: {}
    };
}
export default ['$animateCss', '$timeout', AccordionDirective];