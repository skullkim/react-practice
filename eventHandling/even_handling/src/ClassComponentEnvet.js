import Rect, {Component} from 'react';

class ClassComponentEnvet extends Component {
    state = {
        message: '',
    };

    render() {
        return (
            <div>
                <h1>practice event</h1>
                <input type="text"
                       name="message"
                       placeholder="input anything"
                       value={this.state.message}
                       onChange={
                           async (e) => {
                               await this.setState({
                                   message: e.target.value
                               });
                               console.log(this.state.message);
                           }
                       }
                />
                <button
                    onClick={() => {
                        alert(this.state.message);
                        this.setState({
                            message: '',
                        });
                    }}
                >확인</button>
            </div>
        );
    }
}

export default ClassComponentEnvet;