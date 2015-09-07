var gulp = require('gulp');
var gutil = require('gulp-util');

var tasks = [
  'clean',
  'react',
  'sync',
  'watch',
  'javascript',
  'images',
  'styles',
  'static'
];
tasks.forEach(function(task) {
  require('./tasks/' + task)(gulp);
});

gulp.task('default', [
  'react', 
  'javascript',
  'images',
  'static',
  'styles',
  'watch'
]);