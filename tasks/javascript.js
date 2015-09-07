/**
 * Sync static files to public folder.
 */
var changed    = require('gulp-changed');

module.exports = function(gulp) {
  gulp.task('javascript', function() {
    return gulp.src('./assets/js/**/*')
      .pipe(changed('.tmp/public/js'))
      .pipe(gulp.dest('.tmp/public/js'));
  });
};
