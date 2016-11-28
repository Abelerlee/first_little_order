ReactJS 我们应该了解的几个特性 ：
        1 基于组件化的思维方式 
        2 用JSX进行编程语法
        3 使用虚拟Dom (Virtual)
        4 组件验证的防呆机制(Commpoent PropType)
        5 组件的状态机制与生命周期 
        6 组件重绘与单项数据流
        7 在js里面编写css
JSX 的语法特性与特点及其写法
        1 语义化的标签
        2 JSX的引用 
                直接引入：
                    <script type="text/babel">
                        ReactDOM.render(
                            <h1>Hello, world!</h1>,
                            document.getElementById('example')
                        );
                     </script>
                外部引入：
                    <script type="text/jsx" src="main.jsx"></script>
        3 JSX类似xml语法，组件的首字母大写，HTML标签小写
        4 jsx到JavaScript的转化
                var text = 'Hello Godai';
                <h1>{text}</h1>
                <h1>{'text'}</h1>
                等价于
                var text = 'Hello Godai';
                React.createElement('h1',null,'Hello Godai');
            每一个组件的render方法是唯一的，也就是只能回传一个节点，如果有多个的div需要render，需要包含在一个元素内或在一个Component内部
        5 注释 jsx中的注释同JavaScript一致 单行注释 //  多行注释 /*  */
        6 HTML 中使用class来定义标签样式，jsx也可以，但是class和for为JavaScript保留为关键字，
          所以在jsx中用className和htmlFor代替。
          在jsx中预设只有属性名称但没有设值的为true,没有预设的属性为false
          <input type="button" disabled />;  等价于   <input type="button" disabled={true} />;
          <input type="button"  />;  等价于   <input type="button" disabled={false} />;
        7 自定义属性  data-attr = 'xd' 
          展示HTML   <div>{{_html: '<h1>Hello World!!</h1>'}}</div>
          样式的写法  <HelloMessage style={{ color: '#FFFFFF', fontSize: '30px'}} />
          事件处理   <HelloMessage onClick={this.onBtn} />

