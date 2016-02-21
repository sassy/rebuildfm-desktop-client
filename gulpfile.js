var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('build', function(){
  return gulp.src(['src/*.js', 'src/**/*.js'])
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['es2015', 'stage-0', 'react']
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('app'));
});
