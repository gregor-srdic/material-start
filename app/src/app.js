// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Users from 'src/users/Users';
import AccordionDirective from 'src/directives/accordion-directive';

export default angular.module('starter-app', ['ngMaterial', Users.name])
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
  .component("mdAccordion", {
    transclude: true,
    template:
    `<md-card class="md-accordion">
      <md-card-header md-ink-ripple>
        <md-card-header-text>
          <span class="md-title">{{$ctrl.header}} {{$ctrl.isOpen}}</span>
        </md-card-header-text>
        <md-icon class="expand-icon" md-svg-icon="arrow_down"></md-icon>
      </md-card-header>
      <md-card-content>
        <div ng-transclude></div>
      </md-card-content>
    </md-card>`,
    bindings: { header: '@', isOpen: '@' },
    controller: function ($scope, $element, $animateCss) {
      $scope.animationDuration = 0.3;
      this.$onInit = () => {
        $scope.open = this.isOpen;
        $scope.accordionContent = $element.find('md-card-content');
        $scope.expandIcon = $element.find('md-card-header').find('md-icon');
        $scope.toggleOpen = () => {
          $scope.open = !$scope.open;
          let h = $scope.accordionContent[0].offsetHeight;
          if ($scope.open) {
            $animateCss($scope.accordionContent, {
              from: { maxHeight: '0px', position: 'relative' },
              to: { maxHeight: `${h}px` },
              duration: $scope.animationDuration
            })
              .start()
              .then(() => $scope.accordionContent.css({ maxHeight: '' }));
            if ($scope.expandIcon && $scope.expandIcon.length > 0) {
              $animateCss($scope.expandIcon, {
                from: { '-webkit-transform': 'scaleY(1)', transform: 'scaleY(1)' },
                to: { '-webkit-transform': 'scaleY(-1)', transform: 'scaleY(-1)' },
                duration: $scope.animationDuration
              })
                .start()
            }
          }
          else {
            $animateCss($scope.accordionContent, {
              from: { maxHeight: `${h}px` },
              to: { maxHeight: '0px' },
              duration: $scope.animationDuration
            })
              .start()
              .then(() => $scope.accordionContent.css({ position: 'absolute', maxHeight: '' }));
            if ($scope.expandIcon && $scope.expandIcon.length > 0) {
              $animateCss($scope.expandIcon, {
                from: { '-webkit-transform': 'scaleY(-1)', transform: 'scaleY(-1)' },
                to: { '-webkit-transform': 'scaleY(1)', transform: 'scaleY(1)' },
                duration: $scope.animationDuration
              })
                .start()
            }
          }
        };
        $element.find('md-card-header').on('mousedown', $scope.toggleOpen);
      }
    }
  })
  .controller('AppController', AppController);
