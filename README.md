# Accordion
[Live example](http://pepa.azurewebsites.net/app/)  
source: *app/src/directives/accordion.js*  

usage: *app/src/users/components/UserDetails.html* 
   
´´´
<md-card md-accordion="true">
  <md-card-header>
    <md-card-header-text><span class="md-title">Accordion header</span></md-card-header-text>
    <md-icon class="expand-icon" md-svg-icon="arrow_down"></md-icon>
  </md-card-header>
  <md-card-content>
    Accordion content
  </md-card-content>
</md-card>
´´´


# Running the application
Clone this repository and execute the following commands in a terminal:

* `npm install jspm live-server -g`
* `jspm update`
* `live-server --open=app`

# Based on Angular Material-Start (ES6)
[Material Start ES6 Tutorial](https://github.com/angular/material-start/tree/es6-tutorial)