'use strict';
/**
 * 環境設定
 */
var CONFIG = {
  outputDirectory: {
    dev : './src/',
    release : './release/',
  },
  sourceDirectory: {
    sass : './src/**/*.scss',
    js : './src/assets/js',
  },
  watchDirectory: {
    html : './src/**/*.html',
    css : './src/**/*.css',
    sass : './src/**/*.scss',
    js : './src/**/*.js',
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
var gulp = require("gulp");
var browser = require("browser-sync");
var reload = browser.reload;
var runSequence = require('run-sequence');
var del = require('del');
var plugins = require("gulp-load-plugins")();

var DevDir = './src/',
  ReleaseDir = './release/',
  SassDir = './src/**/*.scss',
  CssDir = './src/assets/css',
  HtmlWatchdir = './src/**/*.html',
  CssWatchdir = './src/**/*.css',
  SassWatchdir = './src/**/*.scss';

/**
 * Sass Task
 */
gulp.task('sass', function() {
  gulp.src(CONFIG.sourceDirectory.sass)
    .pipe(plumber())
    .pipe(sass({outputStyle: SASS_OUTPUT_STYLE}))
    //ファイルの結合に使用
    //.pipe(concat('concat.css'))
    .pipe(pleeease({
      autoprefixer: {"browsers": SASS_AUTOPREFIXER_BROWSERS},
      minifier: false
    }))
    .pipe(gulp.dest(DevDir))
    .pipe(browser.reload({stream:true}));
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
  gulp.src().pipe(browser.reload({stream:true}));
});

/**
 * Watch Task
 */
gulp.task("watch",['server'], function() {
  gulp.watch(CONFIG.HtmlWatchdir,["typescript"]);
  gulp.watch(CONFIG.SassWatchdir,["sass"]);
});

/**
 * Server Task
 */
gulp.task("server", function() {
  browser({
    server: {
      baseDir: DevDir
    }
  });
  gulp.watch(CONFIG.HtmlWatchdir, reload);
});

/**
 * Default Task
 */
gulp.task('default', function(callback) {
  return runSequence('watch',callback);
  // return runSequence(['sass','htmllint'],'watch',callback);
});

