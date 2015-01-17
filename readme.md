# Browserify + Marionette = <3

This is a presentation application built with Browserify and Marionette. You can view the annotated source at [http://kkemple.github.io/talks.browserify-marionette/readme.html](http://kkemple.github.io/talks.browserify-marionette/readme.html)

The actual slides for the presentation can be viewed at [http://kkemple.github.io/slides.browserify-marionette](http://kkemple.github.io/slides.browserify-marionette)

### Talk Overview

- Follow Along - List of talk resources

- What Is Browserify - Quick Explaination

- Why use Browserify?
    - CommonJS Style Modules
    - Access to NPM modules
    - Easy build integration

- Getting Browserify Set Up
    - Running From The Command Line
    - Running with Grunt
    - Shimming Backbone.$
    - Handling Non-NPM Dependencies
    - Shimming Globals
    - Understanding Transforms

- Browserify and Marionette
    - Configuration and Initialization
    - Keeping Things Small
    - Organizing Templates
    - What About Modules?

- Getting Really Dry
    - Turning code in to NPM modules
    - Making them private if proprietary

- Resources
    - How Browserify Works
    - Browserify Articles
    - Marionetteify
    - NPM Enterprise


### Building the project

After you clone/fork the repo run `npm install`, then run `bower install` (you will need to have Bower installed globally).

Then simply run `grunt build`

Everything is copied in to the dist folder so the presentation can be viewed anywhere. (Like GitHub pages)