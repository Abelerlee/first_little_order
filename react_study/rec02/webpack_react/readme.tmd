webpack 配置的 React
    接下來我們一樣透過 Hello World 實例來介紹如何用 Webpack 設置 React 開發環境：

依據你的作業系統安裝 Node 和 NPM（目前版本的 Node 都會內建 NPM）

透過 NPM 安裝 Webpack（可以 global 或 local project 安裝，這邊我們使用 local）、webpack loader、webpack-dev-server

Webpack 中的 loader 類似於 browserify 內的 transforms，但 Webpack 在使用上比較多元，除了 JavaScript loader 外也有 CSS Style 和圖片的 loader。此外，webpack-dev-server 則可以啟動開發用 server，方便我們測試

// 按指示初始化 NPM 設定檔 package.json
$ npm init 
// --save-dev 是可以讓你將安裝套件的名稱和版本資訊存放到 package.json，方便日後使用
$ npm install --save-dev babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react html-webpack-plugin webpack webpack-dev-server
在根目錄設定 webpack.config.js

事實上，webpack.config.js 有點類似於 gulp 中的 gulpfile.js 功用，主要是設定 webpack 的相關設定

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
在根目錄設定 .babelrc

{
  "presets": [
    "es2015",
    "react",
  ],
  "plugins": []
}
安裝 react 和 react-dom

$ npm install --save react react-dom
撰寫 Component（記得把 index.html 以及 index.js 放到 app 資料夾底下喔！） index.html

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
index.js

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
在終端機使用 webpack 進行成果展示，webpack 相關指令：

webpack：會在開發模式下開始一次性的建置
webpack -p：會建置 production 的程式碼
webpack --watch：會監聽程式碼的修改，當儲存時有異動時會更新檔案
webpack -d：加入 source maps 檔案
webpack --progress --colors：加上處理進度與顏色
如果不想每次都打一長串的指令碼的話可以使用 package.json 中的 scripts 設定

"scripts": {
  "dev": "webpack-dev-server --devtool eval --progress --colors --content-base build"
}
然後在終端機執行：

$ npm run dev
當我們此時我們可以打開瀏覽器輸入 http://localhost:8008 ，就可以看到 Hello, world! 了！