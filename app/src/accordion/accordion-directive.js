import { animateAccordionToggle } from 'src/utils.js';

function AccordionDirective($animateCss) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.animationDuration = 0.3;
            element.addClass('md-accordion');
            scope.accordionContent = element.find('md-card-content');
            scope.expandIcon = element.find('md-card-header').find('md-icon');
            scope.toggleOpen = (skipAnimation) => {
                scope.open = !scope.open;
                animateAccordionToggle($animateCss, scope.open, scope.accordionContent, scope.expandIcon, skipAnimation ? 0 : scope.animationDuration);
            }
            element.find('md-card-header').on('click', () => {
                scope.toggleOpen(false);
            });
            scope.open = scope.mdAccordion !== true;
            scope.toggleOpen(true);
        },
        scope: {
            mdAccordion: '='
        }
    };
}
export default ['$animateCss', AccordionDirective];