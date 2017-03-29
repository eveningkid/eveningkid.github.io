const gulp = require('gulp')
const sass = require('gulp-sass')

const paths = {
  scss: './scss/**/*.scss',
}

gulp.task('sass', function () {
  return gulp.src(paths.scss)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./assets/css'))
})

gulp.task('watch', function () {
  gulp.watch(paths.scss, ['sass'])
})

gulp.task('default', ['watch'])
