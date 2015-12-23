"use strict";

const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('webserver', function () {
    return gulp.src('./src/remoteDebug')
        .pipe(webserver({
            port: 9000
        }));
});