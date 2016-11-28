/**
 * Created by Administrator on 2016/11/28.
 */

/*class HelloMessage extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
}
HelloMessage.propTypes = {
    name: React.propTypes.string,
}
HelloMessage.defaultProps = {
    name: 'hehe'
}

React.render(<HelloMessage name='fhgvhgvhg' />,document.getElementById('app'))*/

const HelloMessage = (props) => (
    <div>Hello {props.name}</div>
);

HelloMessage.propTypes = {
    name: React.PropTypes.string,
}

HelloMessage.defaultProps = {
    name: 'Zuck',
}

ReactDOM.render(<HelloMessage name="Mark" />, document.getElementById('app'));