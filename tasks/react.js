/**
 * Compile React jsx files to bundle.
 */
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');

module.exports = function(gulp) {
  gulp.task('react', function() {
    var stream = browserify('./react/main.react.js')
      .transform(babelify)
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('.tmp/public/js'));
    return stream;
  });
};