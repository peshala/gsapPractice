var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('gulp4-run-sequence');
var sassLint = require('gulp-sass-lint');
var bower = require('gulp-bower');
var sassGlob = require('gulp-sass-glob');
var mainBowerFiles = require('main-bower-files');
var exists = require('path-exists').sync;
var inject = require('gulp-inject');

// Basic Gulp task syntax
gulp.task('hello', function() {
  console.log('Hello World!');
})

// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  })
})

// SASS
gulp.task('sass', function() {
  return gulp.src('src/assets/scss/**/**/**/*.scss') // Gets all files ending with .scss in src/assets/scss and children dirs
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/assets/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

// Watchers
gulp.task('watch', function() {
  gulp.watch('src/assets/scss/**/**/**/**', ['sass']);
  gulp.watch('src/**/**/**/*.html', browserSync.reload);
  gulp.watch('src/**/**/**/*.php', browserSync.reload);
  gulp.watch('src/**/**/**/*.js', browserSync.reload);
})

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function() {

  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

// Optimizing Images 
gulp.task('images', function() {
  return gulp.src('src/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/assets/images'))
});

// Icons
gulp.task('icons', function() {
  return gulp.src('src/assets/icons/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/assets/icons'))
});

// Copying fonts
gulp.task('fonts', function() {
  return gulp.src('src/assets/fonts/**/*')
    .pipe(gulp.dest('dist/assets/fonts'))
})


// Copy bower vendors
gulp.task('vendors', function() {
  return gulp.src([
      '!src/vendors/**/*.md',
      '!src/vendors/**/*.json',
      '!src/vendors/**/*.lock',
      '!src/vendors/**/*.txt',
      'src/vendors/**/*',
    ])
    .pipe(gulp.dest('dist/vendors'))
})

// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
})

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    ['useref', 'images', 'icons', 'fonts', 'vendors'],
    callback
  )
})
