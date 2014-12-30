module.exports = {
    app: {
        files: {
            'dist/js/app.js': ['js/**/*.js']
        },
        options: {
            transform: ['hbsfy']
        }
    }
}