const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const { path } = require('./gulp/const.js');

function gulpCleanTask() {
    return src(path.dist, { read: false, allowEmpty: true }).pipe(clean());
}

function copyJsTask() {
    return src(path.srcJs)
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(dest(path.dist))
}

function copyHtmlTask() {
    return src(path.srcHtml)
        .pipe(dest(path.dist))
}

function copyCssTask() {
    return src('./src/*.css')
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(dest(path.dist))
}

function buildTask() {
    return series(gulpCleanTask, parallel(copyJsTask, copyCssTask, copyHtmlTask));
}

function serveTask(done) {
    browserSync.init({
        server: {
            baseDir: path.dist
        }
    });

    watch('./src/**/*.js', series(copyJsTask, reloadBrowser));
    watch('./src/**/*.css', series(copyCssTask, reloadBrowser));
    watch('./src/index.html', series(copyHtmlTask, reloadBrowser));

    done();
}

function reloadBrowser(done) {
    browserSync.reload();
    done();
}

module.exports = {
    build: buildTask(),
    start: series(buildTask(), serveTask),
}