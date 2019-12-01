import React, { Component } from 'react';
import HelloWorld from "./HelloWorld"
import reducer from "./reducers"
import { createStore } from "redux"
import './App.css';

const initialState = {
  tech: "React"
}
const store = createStore(reducer, initialState)

class App extends Component {

  render() {
    return (
      <div className="App">
        <HelloWorld tech={store.getState().tech} />
      </div>
    );
  }
}

export default App;
