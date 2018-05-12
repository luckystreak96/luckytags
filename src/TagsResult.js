import React, { Component } from "react";
import "./TagsResult.css";

class TagsResult extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: props.searchValue, value:[{data:[{tags:"loading...", text:"loading...."}]}], response: {} };
    this.executeSearch = this.executeSearch.bind(this);
    //this.componentDidMount = this.componentDidMount.bind(this);
    this.apiCallback = this.apiCallback.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => {this.apiCallback(res)})//this.apiCallback(res))
      .catch(err => console.log(err));
  }

  apiCallback(response)
  {
    var cloneJSON = JSON.parse(JSON.stringify(response));
    // Only see values from user called pikapak
    cloneJSON = cloneJSON.filter(item => {return item.name === "pikapak"});
    this.setState({value: cloneJSON});
    console.debug(cloneJSON);
    for (var i = 0; i < this.state.response.length; i++) {
      // look for the entry with a matching `code` value
      if (this.state.response[i].name === "pikapak") {
        // we found it
        // obj[i].name is the matched result
        this.setState({response: this.state.response[i].data});
      } else {
        this.setState({response: this.state.response[0].data});
      }

    }
    //this.setState({value: this.state.response.data});
    //this.renderTable();// this.renderTable();
}

  callApi = async () => {
    const response = await fetch("/tags");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  executeSearch(e) {
    this.setState({ searchValue: this.getSearchValue() });
    e.preventDefault();
  }

  getSearchValue() {
    var ele = document.getElementById("submit");
    if (ele === null) return "";
    else return ele.value;
  }

  renderTable() {
    var temp = this.state.response.data
    this.setState({value: temp
      .filter(function(x) {
        return x.data.tags.includes(this.state.searchValue);
      }, this)
      .map(function(dat, i) {
        return (
          <tr key={i}>
            <td key={dat.tags}>{dat.tags}</td>
            <td key={dat.text}>{dat.text}</td>
          </tr>
        );
      })});
      console.debug(this.state.value);
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
            {this.state.value.map((item, i) => 
      (item.data.filter(function(x) {
        return x.tags.includes(this.state.searchValue);
      }, this)
      .map(function(dat, i) {
        return (
          <tr key={i}>
            <td key={dat.tags}>{dat.tags}</td>
            <td key={dat.text}>{dat.text}</td>
          </tr>
        );
      })))}

          </tbody>
        </table>
      </div>
    );
  }
}

export default TagsResult;
