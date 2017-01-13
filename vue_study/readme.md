vue.js的进阶之路

使用Vue的过程就是定义MVVM各个组成部分的过程的过程。

定义View
定义Model
创建一个Vue实例或"ViewModel"，它用于连接View和Model
在创建Vue实例时，需要传入一个选项对象，选项对象可以包含数据、挂载元素、方法、模生命周期钩子等等。

在这个示例中，选项对象的el属性指向View，el: '#app'表示该Vue实例将挂载到<div id="app">...</div>这个元素；data属性指向Model，data: exampleData表示我们的Model是exampleData对象。
Vue.js有多种数据绑定的语法，最基础的形式是文本插值，使用一对大括号语法，在运行时{{ message }}会被数据对象的message属性替换，所以页面上会输出"Hello World!"。

Vue.js的常用指令
上面用到的v-model是Vue.js常用的一个指令，那么指令是什么呢？

Vue.js的指令是以v-开头的，它们作用于HTML元素，指令提供了一些特殊的特性，将指令绑定在元素上时，指令会为绑定的目标元素添加一些特殊的行为，我们可以将指令看作特殊的HTML特性（attribute）。
Vue.js提供了一些常用的内置指令，接下来我们将介绍以下几个内置指令：

v-if指令
v-show指令
v-else指令
v-for指令
v-bind指令
v-on指令
Vue.js具有良好的扩展性，我们也可以开发一些自定义的指令，后面的文章会介绍自定义指令。

v-if指令
v-if是条件渲染指令，它根据表达式的真假来删除和插入元素，它的基本语法如下：
    v-if="expression"
    expression是一个返回bool值的表达式，表达式可以是一个bool属性，也可以是一个返回bool的运算式。
    v-if指令是根据条件表达式的值来执行元素的插入或者删除行为。

v-show指令
    v-show也是条件渲染指令，和v-if指令不同的是，使用v-show指令的元素始终会被渲染到HTML，它只是简单地为元素设置CSS的style属性。

v-else指令
    可以用v-else指令为v-if或v-show添加一个“else块”。v-else元素必须立即跟在v-if或v-show元素的后面——否则它不能被识别。
    v-else元素是否渲染在HTML中，取决于前面使用的是v-if还是v-show指令。
    这段代码中v-if为true，后面的v-else不会渲染到HTML；v-show为tue，但是后面的v-else仍然渲染到HTML了。

v-for指令
    v-for指令基于一个数组渲染一个列表，它和JavaScript的遍历语法相似：
    v-for="item in items"
    items是一个数组，item是当前被遍历的数组元素。

v-bind指令
    v-bind指令可以在其名称后面带一个参数，中间放一个冒号隔开，这个参数通常是HTML元素的特性（attribute），例如：v-bind:class    v-bind:argument="expression"

v-on指令
    v-on指令用于给监听DOM事件，它的用语法和v-bind是类似的，例如监听a元素的点击事件：

v-bind和v-on的缩写
    Vue.js为最常用的两个指令v-bind和v-on提供了缩写方式。v-bind指令可以缩写为一个冒号，v-on指令可以缩写为@符号。

    <!--完整语法-->
    <a href="javascripit:void(0)" v-bind:class="activeNumber === n + 1 ? 'active' : ''">{{ n + 1 }}</a>
    <!--缩写语法-->
    <a href="javascripit:void(0)" :class="activeNumber=== n + 1 ? 'active' : ''">{{ n + 1 }}</a>

    <!--完整语法-->
    <button v-on:click="greet">Greet</button>
    <!--缩写语法-->
    <button @click="greet">Greet</button>