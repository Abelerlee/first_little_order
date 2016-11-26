ch01 认识ReactJS
    Learn once , write everywhere
    React 是一个专注于UI (view)的 JavaScript 函数库 (Library)
    学习React我们需要了解以下几点知识：
        jsx 这是一种语法形式，类似于XML的ECMAScript语法扩展
        npm (Node Package Manager)是Node.js下的主流套件管理工具
        ES6 ECMASscript的在一个版本
        Babel 编译器，由于ES6的语法还不是完全被现在的浏览器支持，所以我们的一些用Es6编写的代码需要经过Babel的编译才能被浏览器识别
    Javascipt 的组件化开发
        CDN-Based 最传统的script引入方式，简单方便，但是问题突出
            不足之处:
                全域下容易造成变量污染和冲突
                文件只能依照 <script> 顺序引进
                在大型项目中资源和版本较难控制
                必须有开发者自己判断模组和函数库之间的依赖关系
        AMD (Asynchronous Module Definition )
        CommonJS
        CMD ( Common Module Definition)
        UMD (Universal Module Definition)
        ES6 Module
    Webpack/Browserify + Gulp
        Webpack
        Browserify
        Gulp
    ESLint 是一个提供Javascript和JSX的代码检查工具，可以确保代码的质量。
    React Router是React中主流的Routing函数库，通过url的变化来管理对应的状态和组件。
    Flux/Redux 是一个实现单向数据流的应用程序数据架构，与React专注于View的部分形成互补
    ImmutableJS 是一个能够让开发者简历不可变数据的函数库
    Isomorphic JavaScript
    React 测试
    React Native
    GraphQL/Relay
ch02 入门操作
    JavaScript模组化开发的优点:
        1. 提升维护性 (Maintainability)
        2. 命名空间更加宽泛 (Namespacing)
        3. 提供可重用组件 (Reusability)
