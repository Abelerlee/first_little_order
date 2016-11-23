用 Webpack 配置的react环境
1 安装node和npm
2 通过npm安装webpack（golbe或者local安装）
3 初始化  npm init //在根目录下生成package.json
4 npm install --save-dev .... webpack服务 //--save-dev 是将安装的服务组件的名称及版本存在package.json中
  安装的有npm install --save-dev
  babel-core
  babel-eslint
  babel-loader
  babel-preset-es2015
  babel-preset-react
  html-webpack-plugin
  webpack
  webpack-dev-server
5 在根部目录下创建 webpack.config.js文件
        webpack.config.js 有點類似於 gulp 中的 gulpfile.js 功用，主要是設定 webpack 的相關設定

        // 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。${__dirname} 為 ES6 語法對應到 __dirname
        const HtmlWebpackPlugin = require('html-webpack-plugin');

        const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
          template: `${__dirname}/app/index.html`,
          filename: 'index.html',
          inject: 'body',
        });

        module.exports = {
          // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
          entry: [
            './app/index.js',
          ],
          // output 是放入產生出來的結果的相關參數
          output: {
            path: `${__dirname}/dist`,
            filename: 'index_bundle.js',
          },
          module: {
            // loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
            loaders: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015', 'react'],
                },
              },
            ],
          },
          // devServer 則是 webpack-dev-server 設定
          devServer: {
            inline: true,
            port: 8008,
          },
          // plugins 放置所使用的外掛
          plugins: [HTMLWebpackPluginConfig],
        };
6 在根目录下创建 .babelrc 文件
      写入:
          {
            "presets": [
              "es2015",
              "react",
            ],
            "plugins": []
          }
7 安装 react 和 react-dom
  npm install --save react
  npm install --save react-dom
8 在根目录下创建app文件夹并创建建index.html和index.is文件
  在index.html中写入:
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>React Setup</title>
        <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    </head>
    <body>
        <!-- 欲插入 React Component 的位置 -->
        <div id="app"></div>
    </body>
    </html>
  在index.js中写入:
    import React from 'react';
    import ReactDOM from 'react-dom';

    class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
        };
      }
      render() {
        return (
          <div>
            <h1>Hello, World!</h1>
          </div>
        );
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'));
9 在终端会使用webpak命令进行操作
    webpack：會在開發模式下開始一次性的建置
    webpack -p：會建置 production 的程式碼
    webpack --watch：會監聽程式碼的修改，當儲存時有異動時會更新檔案
    webpack -d：加入 source maps 檔案
    webpack --progress --colors：加上處理進度與顏色

   如果不想每次都打一长串的指令进项操作的话，可以下package.json中的scripts进行设定:
   在package.json中写入:

   "scripts": {
     "dev": "webpack-dev-server --devtool eval --progress --colors --content-base build"
   }
 10 在cmd 中执行 npm run dev
 11 在浏览器中打开 http://localhost:8008