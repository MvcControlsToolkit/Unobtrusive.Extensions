var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    rename = require('gulp-rename');

gulp.task("minifyJS", function () {
    gulp.src(["jquery.validate.unobtrusive.dynamic.js", "jquery.validate.unobtrusive.globalize.js"], { base: "." })
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("."));
});
gulp.task("minifyJSAll", function () {
    gulp.src(["jquery.validate.unobtrusive.dynamic.js", "jquery.validate.unobtrusive.globalize.js"], { base: "." })
        .pipe(concat("jquery.validate.unobtrusive.extensions.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("default", ["minifyJS", "minifyJSAll"]);