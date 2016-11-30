/**
 * Created by Administrator on 2016/11/28.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {
            secondNum: 0,
        };
    }
    tick(){
        this.setState({secondNum: this.state.secondNum + 1})
    }
    componentDidMount(){
        this.time = setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.time);
    }
    render() {
        return (
            <div>
                <h1>timeTURN: {this.state.secondNum}!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));