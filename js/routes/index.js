var app = require('../app'),
    PresentationRouter = require('./presentation');

app.addInitializer(function() {
    new PresentationRouter();
});