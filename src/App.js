import React, { Component } from "react";
import TagsResult from "./TagsResult";
import AddTag from "./AddTag";
import logo from "./logo.svg";
import "./App.css";
import "./Content.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Content">
          <AddTag className="addTag" />
          <TagsResult className="tagsResult" />
        </div>
      </div>
    );
  }
}

export default App;
