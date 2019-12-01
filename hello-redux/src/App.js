import React, { Component } from 'react';
import HelloWorld from "./HelloWorld"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tech: "React"
    }
  }
  render() {
    return (
      <div className="App">
        <HelloWorld tech={this.state.tech} />
      </div>
    );
  }
}

export default App;
