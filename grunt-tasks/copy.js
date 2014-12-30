module.exports = {
    'index.html': {
        src: 'index.html',
        dest: 'dist/index.html'
    },
    img: {
        expand: true,
        cwd: 'img/',
        src: ['**'],
        dest: 'dist/img/'
    },
    fonts:  {
        expand: true,
        cwd: 'fonts/',
        src: ['**'],
        dest: 'dist/fonts/'
    },
    'normalize.css': {
        src: 'libs/normalize.css/normalize.css',
        dest: 'dist/css/normalize.css'
    },
    'hljs.css': {
        src: 'node_modules/highlight.js/styles/tomorrow.css',
        dest: 'dist/css/highlightjs-tomorrow-theme.css'
    }
};
