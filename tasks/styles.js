/**
 * Sync css files to public folder.
 */
var changed      = require('gulp-changed');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function(gulp) {
  gulp.task('styles', function() {
    return gulp.src('./assets/styles/main.scss')
      .pipe(changed('.tmp/public/styles'))
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('.tmp/public/styles'));
  });
};
