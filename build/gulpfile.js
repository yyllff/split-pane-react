const path = require('path');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const rimraf = require('rimraf');
const sass = require('gulp-sass')(require('sass'));
const tsProject = ts.createProject('../tsconfig.json');

const output = '../esm';

gulp.task('clean', function (cb) {
    rimraf(output, cb);
});

gulp.task('build:esm', function () {
    return tsProject
        .src()
        .pipe(tsProject())
        .on('error', function (error, callback) {
            console.error(error.stack);
        })
        .pipe(gulp.dest(output));
});

gulp.task('build:sass', function () {
    return gulp
        .src('../src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(output));
});

gulp.task(
    'default',
    gulp.series(
        'clean',
        'build:esm',
        'build:sass'
    )
);
