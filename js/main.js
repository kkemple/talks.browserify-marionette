'use strict';

var app = require('./app'),
    Slides = require('./collections/slides'),
    slidesConfig = require('./config/slides'),
    Presentation = require('./views/presentation'),
    $ = require('./libs/jquery'),
    slides,
    presentation;


slides = new Slides(slidesConfig);
presentation = new Presentation({ collection: slides });

// Once the app is started show the presentation
app.addInitializer(function() {
    app.mainRegion.show(presentation);
});

// Catch all keyup events
$(document).on('keyup', function(e) {

    switch (e.which) {

        // For left and up, step backward
        case 37:
        case 38:
            slides.stepBackward();
            e.preventDefault();
            break;

        // For right and down, step forward
        case 39:
        case 40:
            slides.stepForward();
            e.preventDefault();
            break;
        default:
            break;
    }
});

// Finally, start the app
app.start();
