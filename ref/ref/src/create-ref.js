import React, {Component} from 'react';

class CreateRef extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    onChange = (e) => {
        console.log(this.input.current);
    }

    render(){
        return(
            <div>
                <input type="text"
                       ref={this.input}
                       onChange={this.onChange}
                />
            </div>
        );
    }
}

export default CreateRef;