var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var historyApiFallback = require('connect-history-api-fallback');
var clean = require('gulp-clean');


// Clean
gulp.task('clean', function () {
    return gulp.src('./dist/*', {read: false})
        .pipe(clean());
});

// Connect
gulp.task('connect', function() {
    connect.server({
        root: ['public', 'dist'],
        livereload: true,
        middleware: function(connect, opt) {
            // make all routes match on public init
            return [ historyApiFallback ];
        }
    });
});

// Browserify
gulp.task('browserify', function() {
    return browserify('./src/index.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('./bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./public/'));
});

// Watch
gulp.task('watch', function () {
    gulp.watch(['./public/*.html']);
    gulp.watch(['./src/**/*.js'], ['browserify']);
});

gulp.task('default', ['clean', 'browserify', 'connect', 'watch']);