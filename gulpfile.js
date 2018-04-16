var gulp = require("gulp"),
    server = require("gulp-webserver"),
    url = require("url");


gulp.task("server", function() {
    gulp.src(".")
        .pipe(server({
            port: 9090,
            open: true // 自动打开页面
            //livereload: true, //自动刷新
            //host: "localhost"
        }))
})