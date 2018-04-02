import React, { Component } from "react";
import "./TagsResult.css";

var json = require("./data.json");

class TagsResult extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: props.searchValue };
    this.executeSearch = this.executeSearch.bind(this);
  }

  executeSearch(e) {
    this.setState({ searchValue: this.getSearchValue() });
    e.preventDefault();
  }

  getSearchValue() {
    var ele = document.getElementById("submit");
    if (ele === null) return "";
    else return ele.value;
  }

  render() {
    return (
      <div className="TagsResult">
        <form
          onSubmit={this.executeSearch}
          className="navbar-form navbar-right"
          role="search"
        >
          <div className="search">
            <input
              id="submit"
              type="text"
              name="search"
              placeholder="Search here..."
            />
            <input id="submit" type="submit" value="Search" />
          </div>
        </form>
        <table>
          <colgroup>
            <col width="80%" />
            <col width="20%" />
          </colgroup>
          <tbody>
            <tr>
              <th>Tags</th>
              <th>Text</th>
            </tr>
            {json.pikapak.data
              .filter(function(x) {return x.tags.includes(this.state.searchValue);}, this)
              .map(function(dat, i) {
                return (
                  <tr key={i}>
                    <td key={dat.tags}>{dat.tags}</td>
                    <td key={dat.text}>{dat.text}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TagsResult;
