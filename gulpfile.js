'use strict';
/**
 * 環境設定
 */
var CONFIG = {
  outputDirectory: {
    dev     : './src/',
    release : './release/',
  },
  sourceDirectory: {
    sass : './src/**/*.scss',
  },
  watchDirectory: {
    html : './src/**/*.html',
    css  : './src/**/*.css',
    sass : './src/**/*.scss',
    js   : './src/**/*.js',
  }
};
var SASS_AUTOPREFIXER_BROWSERS = [
  'ie >= 8',
  'ios >= 7',
  'android >= 2.3',
  'last 4 versions'
];
var SASS_OUTPUT_STYLE = "expanded"; //nested, compact, compressed, expanded.


/**
 * IMPORT MODULES
 */
var del         = require('del');
var gulp        = require("gulp");
var sass        = require("gulp-sass");
var pleeease    = require("gulp-pleeease");
var plumber     = require("gulp-plumber");
var htmlhint    = require("gulp-htmlhint");
var browserSync = require("browser-sync");
var runSequence = require('run-sequence');


/**
 * Sass Task
 */
gulp.task('sass', function() {
  gulp.src(CONFIG.sourceDirectory.sass)
    .pipe(plumber())
    .pipe(sass({outputStyle: SASS_OUTPUT_STYLE}))
    .pipe(pleeease({
      autoprefixer: {"browsers": SASS_AUTOPREFIXER_BROWSERS},
      minifier: false
    }))
    .pipe(gulp.dest(CONFIG.outputDirectory.dev))
    .pipe(browserSync.reload({stream:true}));
});

/**
 * HtmlLint Task
 */
gulp.task('htmllint', () => {
  return gulp.src([CONFIG.watchDirectory.html])
  .pipe(plumber())
  .pipe(htmlhint('.htmlhintrc'))
  .pipe(htmlhint.reporter())
});

/**
 * Reload Task
 */
gulp.task("reload",function() {
  gulp.src().pipe(browserSync.reload({stream:true}));
});

/**
 * Watch Task
 */
gulp.task("watch",['server'], function() {
  gulp.watch(CONFIG.watchDirectory.html,["htmllint"]);
  gulp.watch(CONFIG.watchDirectory.sass,["sass"]);
});

/**
 * Server Task
 */
gulp.task("server", function() {
  browserSync({
    server: {
      baseDir: CONFIG.outputDirectory.dev
    }
  });
  gulp.watch(CONFIG.watchDirectory.html, browserSync.reload);
});

/**
 * Default Task
 */
gulp.task('default', function(callback) {
  return runSequence(['sass','htmllint'],'watch',callback);
});

