# Browserify + Marionette = <3

This is a presentation application built with Browserify and Marionette. You can view the annotated source at [http://github.io/kkemple/talks.browserify-marionette](http://github.io/kkemple/talks.browserify-marionette)

The actual slides for the presentation can be viewed at [http://github.io/kkemple/slides.browserify.marionette](http://github.io/kkemple/slides.browserify-marionette)

### Overview

- Why use Browserify?
    - CommonJS Style Modules
    - Access to NPM modules
    - Easy build integration

- Getting Browserify Set Up
    - Running From The Command Line
    - Running with Grunt
    - Handling Non-NPM Dependencies
    - Shimming Globals
    - Understanding Transforms

- Adding Marionette In To The Mix
    - Configuration vs Startup
    - Setting up our app
    - Keeping Things Small
    - Setting Up Templates
    - Using Marionette Modules
    - Setting Up Routing

- Resources



### Building the project

After you clone/fork the repo run `npm install`, then run `bower install` (you will need to have Bower installed globally).

Then simply run `grunt build`

Everything is copied in to the dist folder so the presentation can be viewed anywhere. (Like GitHub pages)