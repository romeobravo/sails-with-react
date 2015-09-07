/**
 * Sync images files to public folder.
 */
var changed    = require('gulp-changed');
var imagemin   = require('gulp-imagemin');
var pngquant   = require('imagemin-pngquant');

module.exports = function(gulp) {
  gulp.task('images', function() {
    return gulp.src('./assets/images/**/*')
      .pipe(changed('.tmp/public/images'))
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }))
      .pipe(gulp.dest('.tmp/public/images'));
  });
};
