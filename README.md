# Accordion
[Live example](http://pepa.azurewebsites.net/app/)

[Source](https://github.com/gregor-srdic/material-start/blob/master/app/src/directives/accordion.js)

[Usage example](https://github.com/gregor-srdic/material-start/blob/master/app/src/users/components/details/UserDetails.html)

```
<md-card md-accordion="true">
  <md-card-header md-ink-ripple>
    <md-card-header-text><span class="md-title">Accordion header</span></md-card-header-text>
    <md-icon class="expand-icon" md-svg-icon="arrow_down"></md-icon>
  </md-card-header>
  <md-card-content>
    Accordion content
  </md-card-content>
</md-card>
```


# Running the application
Clone this repository and execute the following commands in a terminal:

* `npm install jspm live-server -g`
* `jspm update`
* `live-server --open=app`

# Based on Angular Material-Start (ES6)
[Material Start ES6 Tutorial](https://github.com/angular/material-start/tree/es6-tutorial)