var gulp         = require('gulp');
var source       = require('vinyl-source-stream');
var babelify     = require('babelify');
var reactify     = require('reactify');
var watchify     = require('watchify');
var browserify   = require('browserify');
var browserSync  = require('browser-sync');


var bundler = watchify(browserify('src/main.jsx'));
bundler.transform(reactify);
bundler.transform(babelify);
bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
    .on('error', function (err) {
        console.log(err.toString())
        browserSync.notify("Browserify Error!");
        this.emit("end");
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({stream: true, once: true}));
}

gulp.task('bundle', function () {
    return bundle();
});

gulp.task('default', ['bundle'], function () {
    browserSync({ server: "./public" });
});
