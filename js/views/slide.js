'use strict';

var Marionette = require('../libs/marionette'),
    templates = require('../config/templates'),
    hljs = require('highlight.js'),
    ScreenEvent = require('../models/screen-event'),
    Slide;


/**
 * The view layer for each slide, minimal functionality
 * Responsible for updating steps (bullet points) when the backing model's index changes
 */
Slide = Marionette.ItemView.extend({
    template: function(modelAttrs) {
        return templates[modelAttrs.id];
    },
    className: 'slide',
    modelEvents: {
        'change:active': 'transition',
        'change:index': 'step'
    },

    /**
     * Set up event handlers for when we get mouse action
     */
    events: function() {
        return (/mobile/.test(navigator.userAgent)) ?
            { 'touchstart': 'start', 'touchend': 'stop' } :
            { 'mousedown': 'start', 'mouseup': 'stop' };
    },

    /**
     * If the model's `active` prop is true, add `active` class
     * If the model's `titleSlide` prop is true, add `title-slide` class
     */
    initialize: function() {
        if (this.model.get('active')) this.$el.toggleClass('active');
        if (this.model.get('titleSlide')) this.$el.addClass('title-slide');

        this.screenEvent = new ScreenEvent();
    },

    /**
     * If the model has steps, set a `stepIndex` and add a reference to the nodes in the DOM
     */
    onRender: function() {
        if (this.model.get('steps')) {
            this.stepIndex = 0;
            this.steps = this.$('.steps').children().hide();
        }

        // check view for a code block, if found, wrap it up!
        var codeBlock = this.$('code');
        if (codeBlock.length) hljs.highlightBlock(codeBlock[0]);
    },

    /**
     * Transitions the visual display of the slide
     */
    transition: function() {
        this.$el.toggleClass('active');
    },

    /**
     * Transitions the visual display of the previous/next step in the bullet points
     */
    step: function() {
        var idx;

        idx = this.model.get('index');
        if (idx === this.stepIndex) return;
        if (idx < this.stepIndex) {
            this.steps.slice(idx, this.stepIndex).fadeOut();
        } else {
            this.steps.slice(this.stepIndex, idx).fadeIn();
        }
        this.stepIndex = idx;
    },

    start: function(e) {
        this.screenEvent.set('startX', e.pageX);
    },

    stop: function(e) {
        this.screenEvent.set('endX', e.pageX);
    }
});

module.exports = Slide;
