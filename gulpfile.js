'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean'),
  file = require('gulp-file'),
  ripple = require('ripple-emulator'),
  open = require('open');

gulp.task('sass', ['clean-css'], function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(file('main.css', ''))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./www/css/'));
});

gulp.task('clean-css', function () {
  return gulp.src('./www/css/*')
    .pipe(clean())
});

gulp.task('emulate', ['sass'], function () {
  var options = {
    keepAlive: false,
    open: true,
    port: 4400
  };

  ripple.emulate.start(options);

  if (options.open) {
    open('http://localhost:' + options.port + '?enableripple=cordova-3.0.0');
  }

});


gulp.task('release', ['sass'], function () {
});
