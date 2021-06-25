import React, {Component} from 'react';

class ClassComponentEnvet extends Component {
    state = {
        message: '',
    }

    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value,
    //     });
    // }
    //
    // handleClick(e) {
    //     alert(this.state.message);
    //     this.setState({
    //         message: '',
    //     });
    // }

    handleChnage = (e) => {
        this.setState({
            message: e.target.value,
        });
    }

    handleClick = (e) => {
        alert(this.state.message);
        this.setState({
            message: '',
        });
    }

    render() {
        return (
            <div>
                <h1>practice event</h1>
                <input type="text"
                       name="message"
                       placeholder="input anything"
                       value={this.state.message}
                       onChange={this.handleChnage}
                />
                <button
                    onClick={this.handleClick}
                >확인</button>
            </div>
        );
    }
}

export default ClassComponentEnvet;