module.exports = {
    options: {
        livereload: true,
        debounceDelay: 250
    },
    scripts: {
        files: ['js/**/*.js'],
        tasks: ['jshint', 'browserify']
    },
    sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
    },
    templates: {
        files: ['partials/slides/*.hbs'],
        tasks: ['templates']
    },
    img: {
        files: ['img/**'],
        tasks: ['build']
    },
    index: {
        files: ['index.html'],
        tasks: ['build']
    }
};
