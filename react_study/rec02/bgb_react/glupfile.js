/**
 * Created by Administrator on 2016/11/28.
 */
// filename: gulpfile.js
// 引入所有需要的檔案
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const htmlreplace = require('gulp-html-replace');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watchify = require('watchify');
const babel = require('babelify');
const streamify = require('gulp-streamify');
// 檔案位置參數
const path = {
    HTML: 'index.html',
    MINIFIED_OUT: 'bundle.min.js',
    OUT: 'bundle.js',
    DEST: 'dist',
    DEST_BUILD: 'dist/build',
    DEST_SRC: 'dist/src',
    ENTRY_POINT: './app/index.js'
};
// 複製 html 到 dist 資料夾中
gulp.task('copy', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});
// 監聽檔案是否有變化，若有變化則重新編譯一次
gulp.task('watch', function() {
    gulp.watch(path.HTML, ['copy']);
    var watcher  = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [babel],
        debug: true,
    }));
    return watcher.on('update', function () {
        watcher.bundle()
            .pipe(source(path.OUT))
            .pipe(gulp.dest(path.DEST_SRC))
        console.log('Updated');
    })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_SRC));
});
// 執行 build production 的流程（包括 uglify、轉譯等）
gulp.task('copy', function(){
    browserify({
        entries: [path.ENTRY_POINT],
        transform: [babel],
    })
        .bundle()
        .pipe(source(path.MINIFIED_OUT))
        .pipe(streamify(uglify(path.MINIFIED_OUT)))
        .pipe(gulp.dest(path.DEST_BUILD));
});
// 將 script 引用換成 production 的檔案
gulp.task('replaceHTML', function(){
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': 'build/' + path.MINIFIED_OUT
        }))
        .pipe(gulp.dest(path.DEST));
});
// 設定 NODE_ENV 為 production
gulp.task('apply-prod-environment', function() {
    process.env.NODE_ENV = 'production';
});

// 若直接執行 gulp 會執行 gulp default 的任務：watch、copy。若跑 gulp production，則會執行 build、replaceHTML、apply-prod-environment
gulp.task('production', ['build', 'replaceHTML', 'apply-prod-environment']);
gulp.task('default', ['watch', 'copy']);