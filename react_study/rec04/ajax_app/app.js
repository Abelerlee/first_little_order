/**
 * Created by Administrator on 2016/11/28.
 */
class UserGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            githubtUrl: '',
            avatarUrl: '',
        }
    }
    componentDidMount() {
        $.get(this.props.source, (result) => {
            console.log(result);
            const data = result;
            if (data) {
                this.setState({
                    username: data.name,
                    githubtUrl: data.html_url,
                    avatarUrl: data.avatar_url
                });
            }
        });
    }
    render() {
        return (
            <div>
                <h3>{this.state.username}</h3>
                <img src={this.state.avatarUrl} />
                <a href={this.state.githubtUrl}>Github Link</a>.
            </div>
        );
    }
}

ReactDOM.render(
    <UserGithub source="https://api.github.com/users/torvalds" />,
    document.getElementById('app')
);