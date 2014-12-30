var path = require('path');

module.exports = function(grunt) {
    "use strict";

    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, 'grunt-tasks'),
        loadGruntTasks: {
            config: require('./package.json'),
        }
    });

    grunt.registerTask('test', ['jshint', /*'jasmine'*/]);

    grunt.registerTask('build', ['test', 'clean',  'copy', 'templates', 'sass', 'uglify', 'browserify']);

    grunt.registerTask('templates', 'builds a templates js file that can be required by browserify', function() {
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
