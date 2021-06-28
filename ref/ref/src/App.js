import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import ValidationSample from "./validation-sample";
import CreateRef from "./create-ref";
import ScrollBox from "./ScrollBox";

class App extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => this.scrollBox=ref}/>
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    to bottom
                </button>
            </div>
        );
    }
}

export default App;
