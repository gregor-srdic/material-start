// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import AccordionDirective from 'src/accordion/accordion-directive';
import BottomSheetScrollableDirective from 'src/bottom-sheets/bottom-sheets-scrollable-directive';
import AccordionComponent from 'src/accordion/accordion-component';
import AccordionGroupComponent from 'src/accordion/accordion-group-component';
import AccordionDemo from 'src/accordion-demo/accordion-demo';
import BootomSheetsDemo from 'src/bottom-sheets-demo/bottom-sheets-demo';

export default angular.module('starter-app', ['ngMaterial'])
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24)
      .icon("arrow_down", "./assets/svg/arrow_down.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
  })
  .directive('mdAccordion', AccordionDirective)
  .component(AccordionGroupComponent.name, AccordionGroupComponent.config)
  .component(AccordionComponent.name, AccordionComponent.config)
  .component(AccordionDemo.name, AccordionDemo.config)
  .component(BootomSheetsDemo.name, BootomSheetsDemo.config)
  .controller('AppController', AppController)
  .directive('bottomSheetsScrollable', BottomSheetScrollableDirective)
  .directive('stopTouchEvent', function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        element.on('touchmove', function (evt) {
          evt.stopPropagation();
        });
      }
    };
  });
