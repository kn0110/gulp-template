var gulp = require("gulp"),
  browser = require("browser-sync"),
  reload = browser.reload,
  runSequence = require('run-sequence'),
  del = require('del'),
  plugins = require("gulp-load-plugins")();
var DevDir = './src/',
  ReleaseDir = './release/',
  SassDir = './src/**/*.scss',
  JsLibsDir = './src/assets/js/libs/**/*.js',
  CssDir = './src/assets/css',
  JsDir = './src/assets/js',
  TypeDir = './src/**/*.ts',
  Es6Dir = './src/**/*.es6',
  HtmlWatchdir = './src/**/*.html',
  CssWatchdir = './src/**/*.css',
  PhpWatchdir = './src/**/*.php',
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
gulp.task('typescript', function() {
  gulp.src([TypeDir])
    .pipe(plugins.plumber())
    .pipe(plugins.typescript({ target: "ES5", removeComments: true, noExternalResolve: false}))
    //.pipe(plugins.concat('concat.js'))
    //.pipe(plugins.uglify())
    .pipe(gulp.dest(DevDir))
    .pipe(browser.reload({stream:true}));
});
gulp.task('eslint', function () {
  return gulp.src([Es6Dir])
    .pipe(plugins.plumber())
    .pipe(plugins.eslint({
      globals: {
        $: true,
        'jQuery':true
      }
    }))
    .pipe(plugins.eslint.format())
});
gulp.task("babel",['eslint'], function() {
  return gulp.src([Es6Dir])
    .pipe(plugins.plumber())
    .pipe(plugins.babel({ loose: "all" }))
    //.pipe(plugins.concat('concat.js'))
    //.pipe(plugins.uglify())
    .pipe(gulp.dest(DevDir))
    .pipe(browser.reload({stream:true}));
});
gulp.task("js",function() {
  gulp.src(["src/assets/js/src/**/*.js"])
    .pipe(plugins.plumber())
    .pipe(plugins.concat('main.js'))
    //.pipe(plugins.uglify())
    .pipe(gulp.dest(JsDir))

  gulp.src([JsLibsDir])
    .pipe(plugins.plumber())
    .pipe(plugins.concat('libs.js'))
    //.pipe(plugins.uglify())
    .pipe(gulp.dest(JsDir))

  gulp.src(["src/assets/js/libs_in/**/*.js"])
    .pipe(plugins.plumber())
    .pipe(plugins.concat('libs_in.js'))
    //.pipe(plugins.uglify())
    .pipe(gulp.dest(JsDir))

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
gulp.task('default', function(callback) {
  //return runSequence(['sass','babel'],'js','watch',callback);
  //return runSequence(['sass','typescript'],'js','watch',callback);
  //return runSequence(['sass','babel'],'watch',callback);
  return runSequence(['sass','babel'],'js','watch',callback);
});

//---release task---
gulp.task('sass_release', function() {
  gulp.src(SassDir)
    .pipe(plugins.plumber())
    .pipe(plugins.sass({outputStyle: 'compact'})) //nested, compact, compressed, expanded.
    //.pipe(concat('concat.css'))
    .pipe(plugins.pleeease({
      autoprefixer: {"browsers": ["last 4 versions", "Android 2.3"]},
      minifier: false
    }))
    //.pipe(header('@charset "utf-8";\n'))
    .pipe(gulp.dest(DevDir))
});
gulp.task('eslint_release', function () {
  return gulp.src([Es6Dir])
  .pipe(plugins.eslint({
    globals: {
      $: true,
      'jQuery':true
    }
  }))
  .pipe(plugins.eslint.format())
});
gulp.task("babel_release",['eslint_release'], function() {
  return gulp.src([Es6Dir])
  .pipe(plugins.babel({ loose: "all" }))
  //.pipe(concat('concat.js'))
  //.pipe(uglify())
  .pipe(gulp.dest(DevDir))
});
gulp.task("js_release",function() {
  gulp.src(["src/assets/js/src/**/*.js"])
    .pipe(plugins.plumber())
    .pipe(plugins.concat('main.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(JsDir))

  gulp.src([JsLibsDir])
    .pipe(plugins.plumber())
    .pipe(plugins.concat('libs.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(JsDir))

  gulp.src(["src/assets/js/libs_in/**/*.js"])
    .pipe(plugins.plumber())
    .pipe(plugins.concat('libs_in.js'))
    //.pipe(plugins.uglify())
    .pipe(gulp.dest(JsDir))
});
gulp.task('deploy',function() {
  gulp.src(['./src/**','!./src/assets/js/libs/*.js','!./src/assets/js/libs_in/*.js','!./src/**/*.scss','!./src/**/*.es6'],
           {base:'src'})
           .pipe(gulp.dest('release'))
});
gulp.task('clean', function(cb) {
  del(['./release/assets/js/','tmp','**/*.log'], cb);
});
gulp.task('release', function(callback) {
  return runSequence(['sass_release','babel_release'],'js_release','deploy','clean',callback);
});

