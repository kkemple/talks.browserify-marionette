module.exports = {
    deps: {
        files: {
            'dist/js/dependencies.min.js': [
                'vendor/underscore/underscore.js',
                'vendor/jquery/dist/jquery.js',
                'vendor/backbone/backbone.js',
                'vendor/marionette/lib/backbone.marionette.js'
            ]
        }
    },
    bundle: {
        files: {
            'dist/js/app.min.js': 'dist/js/app.js'
        }
    }
};
