/**
 * Created by Administrator on 2016/11/28.
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
                <h1>Hello, World!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));