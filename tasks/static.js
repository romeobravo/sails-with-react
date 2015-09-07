/**
 * Sync static files to public folder.
 */
var changed    = require('gulp-changed');

module.exports = function(gulp) {
  gulp.task('static', function() {
    return gulp.src('./assets/*')
      .pipe(changed('.tmp/public'))
      .pipe(gulp.dest('.tmp/public'));
  });
};
