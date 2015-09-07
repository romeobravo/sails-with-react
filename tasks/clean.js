var del  = require('del');

module.exports = function(gulp) {
  gulp.task('clean:dev', function () {
    return del('.tmp');
  });
  gulp.task('clean:prod', function () {
    return del('www');
  });
}
