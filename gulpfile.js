var gulp = require('gulp'),
  connect = require('gulp-connect');

var paths = [
  "./index.html",
  "./about.html"
]

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src(paths)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(paths, ['html']);
});

gulp.task('default', ['connect', 'watch']);
