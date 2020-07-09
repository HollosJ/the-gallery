const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
let uglify = require("gulp-uglify-es").default;
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass");

//Copy all html files
gulp.task("copyHTML", (done) => {
  console.log("Copying all HTML files...");
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
  done();
});

// //Optimize images
gulp.task("imageMin", (done) => {
  console.log("Minifying all images...");
  gulp.src("src/img/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
  done();
});

// //Concatenate and minify scripts
gulp.task("uglify", (done) => {
  console.log("Minifying scripts...");
  gulp.src("src/js/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
  done();
});

//Compile Sass and minify output CSS
gulp.task("minifyCSS", (done) => {
  console.log("Compiling SASS and minifying output CSS");
  gulp
    .src("src/css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"));
  done();
});

gulp.task(
  "default",
  gulp.parallel(["copyHTML", "imageMin", "minifyCSS", "uglify"])
);
