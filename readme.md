# Browserify + Marionette = <3

This is a presentation application built with Browserify and Marionette. You can view the annotated source at [http://github.io/kkemple/talks.browserify-marionette/readme.html](http://github.io/kkemple/talks.browserify-marionette/readme.html)

The actual slides for the presentation can be viewed at [http://github.io/kkemple/slides.browserify-marionette](http://github.io/kkemple/slides.browserify-marionette)

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

- Browserify and Marionette
    - Configuration and Initialization
    - Keeping Things Small
    - Pre-compiling Templates
    - What About Modules?
    - Setting Up Routing

- Resources



### Building the project

After you clone/fork the repo run `npm install`, then run `bower install` (you will need to have Bower installed globally).

Then simply run `grunt build`

Everything is copied in to the dist folder so the presentation can be viewed anywhere. (Like GitHub pages)