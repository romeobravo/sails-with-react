/**
 * Sync files to public folder.
 */
var browserify = require('browserify');
var babelify   = require('babelify');
var watchify   = require('watchify');
var changed    = require('gulp-changed');
var source     = require('vinyl-source-stream');

module.exports = function(gulp) {
  gulp.task('sync', ['react'], function() {
    return gulp.src(['./assets/**/*.!(coffee|less)', '!assets/images{,/**}'])
      .pipe(changed('.tmp/public'))
      .pipe(gulp.dest('.tmp/public'));
  });
};
