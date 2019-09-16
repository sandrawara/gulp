const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');

//Using Gulp 3//

// Copy all HTML files
gulp.task('copyHtml',function(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(livereload()); //Force window update
});

// Optimize Images
gulp.task('imageMin',function(){
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .pipe(livereload());
});

//Minify js
gulp.task('compress',function() {
  return gulp.src('src/*.js')
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

//Compile & compress sass
gulp.task('sass',function() {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

//Concat scripts
gulp.task('scripts',function(){
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe (uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload()); 
});

 //Array
 gulp.task('default',gulp.parallel(['copyHtml','imageMin','sass','scripts']));

 //Watch - automize changes
 gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('src/js/*.js', gulp.series('scripts'));
    gulp.watch('src/images/*', gulp.series ('imageMin'));
    gulp.watch('src/sass/*.scss', gulp.series ('sass'));
    gulp.watch('src/*.html', gulp.series('copyHtml'));

 });