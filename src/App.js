import React, { Component } from "react";
import TagsResult from "./TagsResult";
import AddTag from "./AddTag";
import logo from "./logo.svg";
import "./App.css";
import "./Content.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ""};
    this.updateTagsResult = this.updateTagsResult.bind(this);
  }

  updateTagsResult()
  {
    this.setState({search: ""});
    console.debug("Supposed to update");
    this.tagsResult.updateTags();
  }

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
          <AddTag className="addTag" onClick={this.updateTagsResult} />
          <TagsResult ref={instance => {this.tagsResult = instance;}} className="tagsResult" searchValue={this.state.search}/>
        </div>
      </div>
    );
  }
}

export default App;
