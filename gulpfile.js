//Include Gulp
var gulp =require('gulp');

//Get Plugins

var jshint =require('gulp-jshint');
var sass =require('gulp-sass');
var concat =require('gulp-concat');
var uglify =require('gulp-uglify');
var rename =require('gulp-rename');
var sourcemaps =require('gulp-sourcemaps');

//Lint Task
gulp.task('lint',function () {
    return gulp.src('public/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));

});

//Compile our Sass files
gulp.task('sass',function () {
   return gulp.src('public/**/*.scss')
       .pipe(sourcemaps.init())
       .pipe(sass())
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('build/css'))
});

//Concatinate and minify JS
gulp.task('scripts',function () {
    return gulp.src(['public/**/*.js','!public/{bower,bower/**}'])
        .pipe(concat('smartapp.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(rename('smartapp.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

//Gulp watch TAsk
gulp.task('watch',function () {
   gulp.watch('public/**/*.js',['lint','scripts']);
   gulp.watch('public/css/*.scss',['sass'])
});

gulp.task('default',['lint','scripts','sass','watch']);