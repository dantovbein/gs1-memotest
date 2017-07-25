'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean'),
  file = require('gulp-file'),
  shell = require('gulp-shell'),
  ripple = require('ripple-emulator'),
  open = require('open'),
  minify = require('gulp-minifier');

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

gulp.task('bundle-js',
  shell.task(['browserify www/js/libs.js -o www/js/bundle.js'])
);

gulp.task('minify-css', ['sass'], function() {
  return gulp.src('./www/css/main.css').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: false,
    minifyCSS: true,
    getKeptComment: function (content, filePath) {
      var m = content.match(/\/\*![\s\S]*?\*\//img);
      return m && m.join('\n') + '\n' || '';
    }
  })).pipe(gulp.dest('./www/css/'));
});

gulp.task('minify-js', function() {
  return gulp.src('./www/js/bundle.js').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: false,
    getKeptComment: function (content, filePath) {
      var m = content.match(/\/\*![\s\S]*?\*\//img);
      return m && m.join('\n') + '\n' || '';
    }
  })).pipe(gulp.dest('./www/js/'));
});

gulp.task('emulate', ['bundle-js','sass'], function () {
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
