/**
 * Created by Administrator on 2016/11/23.
 */

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
                <h1>Hello  World!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

//使用 ES6 的 Class（可以进行比较复杂的操作和组件生命周期的控制，相对于 stateless components 更加耗费资源）
/*// 每一个 组件的开头字母要大写
 class App extends React.Component {
 // render 是 Class based 元件唯一必須的方法（method）
 render() {
 return (
 <h1>Hello, World!</h1>
 );
 }
 }

 // 將 <App /> 元件插入 id 为 app 的 DOM 元素中
 ReactDOM.render(<App/>, document.getElementById('app'));*/


//使用 Functional Component 写法（简单的 render UI 的 stateless components，
//没有内部状态，没有实际组件和ref,没有生命周期函数。
//若非需要控制生命周期的需要，建议多使用stateless components 获得比较的能效）
/*
 // 使用 arrow function 来设计 Functional Component 让UI设计更单纯（f(D) => UI），減少副作用（side effect）
 const App = () => (
 <h1>11111!</h1>
 );

 // 将 <MyComponent /> 元件插入 id 为 app 的 DOM 元素中
 ReactDOM.render(<App/>, document.getElementById('app'));*/
