import { animateAccordionToggle } from 'src/utils.js';

function AccordionDirective($animateCss) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.animationDuration = 0.3;
            element.addClass('md-accordion');
            scope.accordionContent = element.find('md-card-content');
            scope.expandIcon = element.find('md-card-header').find('md-icon');
            scope.toggleOpen = () => {
                scope.open = !scope.open;
                animateAccordionToggle($animateCss, scope.open, scope.accordionContent, scope.expandIcon, scope.animationDuration);
            }
            scope.open = scope.mdAccordion !== true;
            scope.toggleOpen();
            element.find('md-card-header').on('mousedown', scope.toggleOpen);
        },
        scope: {
            mdAccordion: '='
        }
    };
}
export default ['$animateCss', AccordionDirective];