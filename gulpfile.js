const gulp = require('gulp');
const sass = require('gulp-sass');

const paths = {
  style: {
    from: './scss/**/*.scss',
    to: './assets/css',
  },
};

gulp.task('sass', function () {
  return gulp.src(paths.style.from)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest(paths.style.to));
});

gulp.task('watch', function () {
  gulp.watch(paths.style.from, gulp.series('sass'));
});

gulp.task('default', gulp.series('watch'));
