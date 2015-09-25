/**
 * Compile React jsx files to bundle.
 */
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var gutil      = require('gulp-util');
var beep       = require('beepbeep');
var uglify     = require('uglifyify');

module.exports = function(gulp) {
  gulp.task('react', function() {
    var stream = browserify('./react/main.react.js')
      .transform(babelify)
      // .transform(uglify)
      .bundle()
      .on('error', function(err) {
        gutil.log(err);
        beep();
        this.emit('end');
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('.tmp/public/js'));
    return stream;
  });
};
