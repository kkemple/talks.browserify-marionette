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

Clone the repo `git clone git@github.com:kkemple/talks.browserify-marionette.git`

Make sure you have Node.js or IO.js installed. If you do not you can get them here:

- Node: [http://nodejs.org](http://nodejs.org)
- IO: [http://nodejs.org](http://nodejs.org)

Next you will need to install `grunt-cli` and `bower` globally if you do not already have them installed:

```shell
npm install grunt-cli -g
```

```shell
npm install bower -g
```

Next you will need to run `npm install`, and then run `bower install`.

Then simply run `grunt build`

Everything is copied in to the dist folder so the presentation can be viewed anywhere. (Like GitHub pages)

> NOTE: if you do not have Ruby and Sass gem installed you will encounter errors during the Grunt build. Please install them if you do not have them already.
