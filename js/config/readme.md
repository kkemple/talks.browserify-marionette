This folder contains all the configuration needed to make the app work. So far that really only entails the templates object and the slides configuration for the Slides Collection, and the event bus for the application.



* ./templates/index.js *

The templates are parsed in to functions by Browserify and there is a custom grunt task `templates` defined in `Gruntfile.js` that generates the code in the `templates/index.js` file. This was done simply to make calling the right template for each slide a bit easier.

Usage:


```
var Backbone = require('./some/path/libs/marionette'),
    templates = require('./some/path/config/templates'),
    SomeView;

SomeView = Backbone.View.extend({
    template: function(rawModel) {
        return templates.someTemplate;
    },

    ...

});

...

```



* ./slides.js *

Just the configuration that will power the slides.


* ./events.js *

The home of our event bus for the application, since the app is small we only have one global event bus. This events module is really just an instance of `Backbone.Wreqr.EventAggregator`, the functionality provided by that class is just fine, but we could easily use Node's `events` module, or any other NPM event module since we are using browserify.
