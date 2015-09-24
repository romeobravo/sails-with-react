/**
 * Watch files.
 */

module.exports = function(gulp) {
  gulp.task('watch', function() {
    gulp.watch('react/**/*.js', ['react']);
    gulp.watch('assets/images/**/*', ['images']);
    gulp.watch('assets/*', ['static']);
    gulp.watch('assets/js/**/*', ['javascript']);
    gulp.watch('assets/styles/**/*', ['styles']);
  });
};
