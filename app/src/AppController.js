/**
 * Main App Controller for the Angular Material Starter App
 * @param $mdSidenav
 * @constructor
 */
function AppController($mdSidenav) {
  var self = this;

  self.selected     = window.location.search && window.location.search.indexOf('bottom') > -1 ? 'bottom_sheets' : 'accordion';
  self.selectView   = selectView;
  self.toggleList   = toggleMenuList;

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleMenuList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectView ( view ) {
    //self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    self.selected = view;
  }
}

export default ['$mdSidenav', AppController ];
