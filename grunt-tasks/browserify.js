module.exports = {
    app: {
        files: {
            'dist/js/app.js': ['js/**/*.js']
        },
        options: {
            // browserifyOptions: {
            //     debug: true
            // },
            transform: ['hbsfy']
        }
    }
};
