var gulp = require('gulp'),
scsslint = require("gulp-scss-lint"),
cssMinifier = require("gulp-minify-css"),
sass = require('gulp-sass'),
sourcemaps = require("gulp-sourcemaps");

gulp.task("default", function()
{
  var csswatcher = gulp.watch("./app/styles/**/*.scss", ["css-build"]);
  csswatcher.on("change", function(event)
  {
    console.log("File: " + event.path + " was " + event.typed);
  });
});

gulp.task("css-build", function()
{
  gulp.src("./app/styles/*.scss")
  //.pipe(scsslint({ "IdSelector" : enable }))
  .pipe(scsslint())
  .pipe(scsslint.failReporter("E"))
  .pipe(sourcemaps.init())
  .pipe(sass({ style: 'expanded' }))
  .pipe(gulp.dest("./app/dist/css"))
  .pipe(cssMinifier())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("./app/dist/css"))
});
