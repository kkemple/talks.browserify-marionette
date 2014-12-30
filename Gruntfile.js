var path = require('path');

module.exports = function(grunt) {
    "use strict";

    /**
     * Use `load-grunt-config` plugin to load task config dynamicly
     */
    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, 'grunt-tasks'),
        loadGruntTasks: {
            config: require('./package.json'),
        }
    });

    // only test the quality of the code
    grunt.registerTask('test', ['jshint', /*'jasmine'*/]);

    // build the app output
    grunt.registerTask('build', ['test', 'clean',  'copy', 'templates', 'sass', 'uglify', 'browserify']);

    /**
     * Custom grunt task to automagically require all templates for the slides
     * Reads all files in slides dir and adds the template function to the module exports object
     * See 'js/config/readme.md' for more info
     */
    grunt.registerTask('templates', 'builds a templates/index.js file that can be required by browserify', function() {
        var js = '';

        grunt.file.recurse('partials/slides/', function(abspath, rootdir, subdir, filename) {
            var file = filename.replace('.hbs', '');
            js += 'module.exports.' +
                    file +
                    ' = require(\'../../../partials/slides/' +
                    file +
                    '.hbs\');' +
                    '\n';
        });

        grunt.file.write('js/config/templates/index.js', js);
    });
};
