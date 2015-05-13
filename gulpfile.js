var gulp       = require('gulp'),
    browserify = require('gulp-browserify');

gulp.task('reactify', function () {

    gulp.src(['app/index.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'babelify','reactify' ]
        }))
        .pipe(gulp.dest('./public/script/custom/'));

});

gulp.task('default', ['reactify']);