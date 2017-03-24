# Accordion

[Live example](http://pepa.azurewebsites.net/app/?q=accordion)

[Usage example](https://github.com/gregor-srdic/material-start/blob/master/app/src/accordion-demo/accordion-demo.html)

## Accordion Component

*Single accordion element, implemented with a md-accordion component. Header text is passed in with header attribute. Initial state can be set througt true/false value of is-open attribute.*

[Source](https://github.com/gregor-srdic/material-start/blob/master/app/src/accordion/accordion-component.js)

```
<md-accordion header="Accordion component 1" is-open="false">
  <p>This is content</p>
  <p>And this is content also</p>
  <p>{{$ctrl.selected.content}}</p>
</md-accordion>
```

## Accordion Component Group

*Component combining multiple accordion components. Opening one of the accordions closes other any other open accordion in the group.*

[Source](https://github.com/gregor-srdic/material-start/blob/master/app/src/accordion/accordion-group-component.js)

```
<md-accordion-group>
  <md-accordion>
   ...
  </md-accordion>
  <md-accordion>
   ...
  </md-accordion>
  ...
</md-accordion-group>
```

## Accordion directive

*Single accordion element, implemented as md-accordion added to md-card. Initial state can be set througt true/false value of md-accordion attribute.*

[Source](https://github.com/gregor-srdic/material-start/blob/master/app/src/accordion/accordion-directive.js)


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


# Bottom sheet

[Live example](http://pepa.azurewebsites.net/app/?q=bottom)

[Usage example](https://github.com/gregor-srdic/material-start/blob/master/app/src/bottom-sheets-demo/bottom-sheets-demo.html)



# Running the application
Clone this repository and execute the following commands in a terminal:

* `npm install jspm live-server -g`
* `jspm update`
* `live-server --open=app`

# Based on Angular Material-Start (ES6)
[Material Start ES6 Tutorial](https://github.com/angular/material-start/tree/es6-tutorial)