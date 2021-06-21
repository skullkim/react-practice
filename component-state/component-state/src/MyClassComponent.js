import React, {Component} from 'react';

class MyClassComponent extends Component {

    state = {
        number: 0,
        fixed_number: 0,
    };

    render() {
        const {number, fixed_number} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>Fixed number: {fixed_number}</h2>
                <button
                    onClick = {async () => {
                        await this.setState({number: number + 1});
                        console.log(this.state);
                        // this.setState({
                        //     number: number + 1
                        // }, () => {
                        //     console.log('setState: ');
                        //     console.log(this.state);
                        // });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default MyClassComponent;