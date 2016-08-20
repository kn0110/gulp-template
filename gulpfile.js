var gulp = require("gulp"),
  browser = require("browser-sync"),
  reload = browser.reload,
  runSequence = require('run-sequence'),
  del = require('del'),
  plugins = require("gulp-load-plugins")();
var DevDir = './src/',
  ReleaseDir = './release/',
  SassDir = './src/**/*.scss',
  CssDir = './src/assets/css',
  HtmlWatchdir = './src/**/*.html',
  CssWatchdir = './src/**/*.css',
  SassWatchdir = './src/**/*.scss';

//---default task---
gulp.task('sass', function() {
  gulp.src(SassDir)
    .pipe(plugins.plumber())
    .pipe(plugins.sass({outputStyle: 'expanded'})) //nested, compact, compressed, expanded.
    //.pipe(concat('concat.css'))
    .pipe(plugins.pleeease({
      autoprefixer: {"browsers": ["last 4 versions",'ie 8', "Android 2.3"]},
      minifier: false
    }))
    //.pipe(header('@charset "utf-8";\n'))
    .pipe(gulp.dest(DevDir))
    .pipe(browser.reload({stream:true}));
});
gulp.task("reload",function() {
  gulp.src().pipe(browser.reload({stream:true}));
});
gulp.task("watch",['server'], function() {
  gulp.watch(Es6Dir,["babel"]);
  gulp.watch(TypeDir,["typescript"]);
  gulp.watch(SassWatchdir,["sass"]);
});
gulp.task("server", function() {
/*
  plugins.connect-php.server({
    port: 8000,
    base: DevDir
  }, function (){
    browser({
    proxy: 'localhost:8000'
  });
*/
  browser({
    server: {
      baseDir: DevDir
    }
  });
  gulp.watch(HtmlWatchdir, reload);
  gulp.watch(PhpWatchdir, reload);
});

//Default Task
gulp.task('default', function(callback) {
  return runSequence(['sass'],'watch',callback);
});

