## Config

This folder contains all the configuration needed to make the app work. So far that really only entails the templates object and the slides configuration for the Slides Collection.

### templates/

The templates are parsed in to functions by Browserify and there is a custom grunt task `templates` defined in `Gruntfile.js` that generates the code in the `templates/index.js` file. This was done simply to make calling the right template for each slide a bit easier.

Usage:


```
var Backbone = require('./some/path/libs/marionette'),
    templates = require('./some/path/config/templates'),
    SomeModel;

SomeModel = Backbone.Model.extend({
    template: function(rawModel) {
        return templates.someTemplate;
    },

    ...

});

...

```


### slides.js

Just the configuration that will power the slides.
