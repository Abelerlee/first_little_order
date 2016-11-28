用  Browserify、Gulp、Babelify配置环境的开发demo

    Browserify 是一個可以讓你在瀏覽器端也能使用像 Node 用的 CommonJS 規範一樣，用輸出（export）和引用（require）來管理模組。
    Gulp 是一個前端任務工具自動化管理工具.例如：打包文件、uglify、將 LESS 轉譯成一般的 CSS 的檔案，轉譯 ES6 語法等工作。
    Babelify 是一個使用 Browserify 進行 Babel 轉換的外掛，你可以想成是一個翻譯機，可以將 React 中的 JSX 或 ES6 語法轉成瀏覽器相容的 ES5 語法

配置开发环境：
    1  初始化 npm init
    2  安装 browserify  npm install --save-dev browserify
    3  安裝开发依赖的环境  npm install --save-dev ....
            gulp、
            gulp-concat、
            gulp-html-replace、
            gulp-streamify、
            gulp-uglify、
            watchify、
            vinyl-source-stream
   4  安裝 编译ES6和JSX的组件，并设定编译规则文件 .babelrc（presets：es2015、react）npm install --save-dev ....
            babelify、
            babel-preset-es2015、
            babel-preset-react
            {
                'presets' : [
                    'es2015',
                    'react',
                ],
                'plugins': []

            }
   5  安装react react-dom  npm install --save-dev ....
   6  编码 index.html index.js
   7  设定 gulpfile.js 文件
   8  在终端执行glup命令（如果没用任务名称是，glup执行默认任务watch和copy）
        watch :监听js文件是否有变化
        copy : 复制HTML文件到执行目录dist
   9  运行程序  glup production
   10 打开dist目录的index文件查看程序
