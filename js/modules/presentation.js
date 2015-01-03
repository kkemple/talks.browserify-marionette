var Marionette = require('../libs/marionette'),
    Backbone = require('../libs/backbone'),
    $ = require('../libs/jquery'),
    PresentationRouter = require('../routes/presentation'),
    PresentationController = require('../controllers/presentation'),
    Slides = require('../collections/slides'),
    slidesConfig = require('../config/slides'),
    PresentationView = require('../views/presentation'),
    vent = require('../config/events'),
    commands = require('../config/commands'),
    PresentationModule;


/**
 * The main (only) module for this application,
 * modules are responsible for building up / breaking down
 * the functionality / data needed for this module to run properly
 *
 * Each module has its own router and controller and it is responsible
 * for providing each piece of functionality with the proper options/data
 *
 * This will also make it easy to break down code that is no longer needed
 * when the module is not needed
 */
PresentationModule = Marionette.Module.extend({

    // make sure the module does not start on app initialization
    startWithParent: false,

    // flag to tell if module is started
    _started: false,

    /**
     * Gather all the collection/routers/controllers for the module,
     * listen for any route changes
     */
    initialize: function() {
        this.slides = new Slides(slidesConfig);
        this.controller = new PresentationController({ slides: this.slides });
        this.router = new PresentationRouter({ controller: this.controller });
        this.listenTo(Backbone.history, 'route', this._onRoute);
    },

    /**
     * Set our flag so we know we the module is started,
     * If we have any view handling, handle it here
     *
     * Set up all listeners, trigger any events we need to fire
     */
    onStart: function() {
        this._started = !this._started;
        this.view = new PresentationView({ collection: this.slides });
        commands.setHandler('presentation:step', this._onStepEvent.bind(this));
        vent.trigger('app:screen', this.view);

        $(document).on('keyup', this._onKeyboardEvent.bind(this));
    },

    /**
     * Set our flag so we know we the module is stopped,
     * If we have any views active, destroy them
     *
     * Remove any event listeners, trigger any events we need to fire
     */
    onStop: function() {
        this._started = !this._started;
        this.view.destroy();
        commands.removeHandler('presentation:step');

        $(document).off('keyup', this._onKeyboardEvent.bind(this));
    },

    /**
     * Our module is concerned with the 'presentation:step' event
     * this is our handler for that event
     */
    _onStepEvent: function(action) {
        this.slides[action]();
    },

    /**
     * The handler for any backbone route change,
     * we want to know if our router is concerned with the route,
     * if we are, start the module, if we are not, stop the module
     */
    _onRoute: function(router) {
        if (this.router === router) {
            if (!this._started) this.start();
        } else {
            if (this._started) this.stop();
        }
    },

    /**
     * The handler for any keyup events,
     * we want to know if the user is trying to
     * navigate through the presentation
     */
    _onKeyboardEvent: function(e) {
        switch (e.which) {

            // For left and up, step backward
            case 37:
            case 38:
                this.slides.stepBackward();
                e.preventDefault();
                break;

            // For right and down, step forward
            case 39:
            case 40:
                this.slides.stepForward();
                e.preventDefault();
                break;
            default:
                break;
        }
    }
});

module.exports = PresentationModule;
