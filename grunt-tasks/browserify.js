module.exports = {
    app: {
        files: {
            'dist/js/app.js': ['js/main.js']
        },
        options: {
            browserifyOptions: {
                debug: true
            },
            transform: ['hbsfy']
        }
    }
};
