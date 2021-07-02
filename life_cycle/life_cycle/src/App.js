import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import LifeCycle from "./life_cycle";
import ErrorBoundary from "./error_boundary";

//랜덤 색생 생성
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
        <div>
          <button onClick={this.handleClick}>Random color</button>
          <ErrorBoundary>
            <LifeCycle color={this.state.color}/>
          </ErrorBoundary>
        </div>
    )
  }
}

export default App;
