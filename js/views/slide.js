'use strict';

var Marionette = require('../shims/marionette'),
    SwipeInteraction = require('../behaviors/swipe-interaction'),
    SwipeEvent = require('../models/swipe-event'),
    templates = require('../config/templates'),
    hljs = require('highlight.js'),
    Slide;

/**
 * The view layer for each slide, minimal functionality
 * Responsible for updating steps (bullet points) when the backing model's index changes
 */
Slide = Marionette.ItemView.extend({
    className: function() {
        var classes = 'slide';
        classes += (this.model.get('titleSlide') === true) ? ' title-slide' : '';
        classes += (this.model.get('active')) ? ' active' : '';
        return classes;
    },

    modelEvents: {
        'change:active': 'transition',
        'change:index': 'step'
    },

    template: function(modelAttrs) {
        return templates[modelAttrs.id];
    },

    /**
     * Handle swipe interaction
     */
    behaviors: {
        SwipeInteraction: {
            behaviorClass: SwipeInteraction,
            model: new SwipeEvent()
        }
    },

    /**
     * If the model has steps, set a `stepIndex` and add a reference to the nodes in the DOM
     */
    onAttach: function() {
        if (this.model.get('steps')) {
            this.stepIndex = 0;
            this.$steps = this.$('.steps').children().hide();
        }

        // check view for a code block, if found, wrap it up!
        var $codeBlock = this.$('code');
        if ($codeBlock.length) hljs.highlightBlock($codeBlock[0]);
    },

    /**
     * Transitions the visual display of the slide
     * Notice we just toggle a class, if you want animations use tranistions
     * You could also add a .once to the el so you can do something when transition is done
     */
    transition: function() {
        this.$el.toggleClass('active', this.model.get('active'));
    },

    /**
     * Transitions the visual display of the previous/next step in the bullet points for the slide
     * (if there are any)
     */
    step: function() {
        var idx;

        idx = this.model.get('index');
        if (idx === this.stepIndex) return;
        if (idx < this.stepIndex) {
            this.$steps.slice(idx, this.stepIndex).fadeOut();
        } else {
            this.$steps.slice(this.stepIndex, idx).fadeIn();
        }
        this.stepIndex = idx;
    }
});

module.exports = Slide;
